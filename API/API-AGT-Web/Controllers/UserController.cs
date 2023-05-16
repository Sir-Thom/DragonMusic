using API_AGT_Web.Users.Data;
using Microsoft.AspNetCore.Mvc;
using API_AGT_Web.Users;
using TestLiteDb.Users;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API_AGT_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUser userRepository;
        private readonly IConfiguration configuration;

        public UserController(IConfiguration configuration)
        {
            userRepository = new UsersLiteDbRepository(configuration["LiteDbFilePath"]);
            userRepository.createUser((new UserInMemoryRepository().GetUsers()));
            this.configuration = configuration;
        }

        [HttpGet("User/{username}")]
        public IActionResult GetUserByUsername(string username)
        {
            try
            {
                var user = userRepository.GetUserByUsername(username, "");

                if (user.Name == "")
                    return BadRequest("Usager invalide");

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return userRepository.GetUsers();
        }

        [HttpPost("SignUp")]
        public IActionResult AddUser(UserModel userModels)
        {
            try
            {
                var checkIfUserExist = userRepository.GetUserByUsername(userModels.Name, userModels.Email);
                if (checkIfUserExist is null)
                {
                    userRepository.createOneUser(
                       new User()
                       {
                           Name = userModels.Name,
                           Email = userModels.Email,
                           PasswordHash = BCrypt.Net.BCrypt.HashPassword(userModels.Password)
                       });

                    return Ok();
                }
                if (userModels.Name == checkIfUserExist.Name && userModels.Email != checkIfUserExist.Email)
                    return BadRequest("Nom déjà pris");
                if (userModels.Name != checkIfUserExist.Name && userModels.Email == checkIfUserExist.Email)
                    return BadRequest("Courriel déjà pris");
                else if (userModels.Name == checkIfUserExist.Name && userModels.Email == checkIfUserExist.Email)
                    return BadRequest("Nom et Courriel déjà utilisés");
                else
                    return BadRequest("Informations invalides");
            }
            catch (Exception exception)
            {
                return StatusCode(500, exception.Message);
            }
        }

        [HttpPost("LogIn")]
        public IActionResult LogIn(UserModel userModel)
        {
            try
            {
                var user = userRepository.GetUserByUsername(userModel.Name, userModel.Email);
                if (user is null)
                {
                    return BadRequest("Nom d'utilisateur ou courriel invalide");
                }
                //bool s = BCrypt.Net.BCrypt.Verify(userModel.Password, user.PasswordHash);

                if (user.Name == "" || !BCrypt.Net.BCrypt.Verify(userModel.Password, user.PasswordHash))
                    return BadRequest("Informations de connexion invalides");


                return Ok(new UserTokenModel() { token = CreateToken(user) });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>()
            {
                new Claim("UserName", user.Name.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                    configuration["TokenPassKey"]
                ));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}