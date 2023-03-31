using API_AGT_Web.Users.Data;
using Microsoft.AspNetCore.Mvc;
using API_AGT_Web.Users;

namespace API_AGT_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUser userRepository;

        public UserController(IConfiguration configuration)
        {
            userRepository = new UsersLiteDbRepository(configuration["LiteDbFilePath"]);
            userRepository.createUser((new UserInMemoryRepository().GetUsers()));
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return userRepository.GetUsers();
        }

        [HttpPost]
        public IActionResult AddUser(UserModels userModels)
        {
            try
            {
                userRepository.createOneUser(
                    new User()
                    {
                        Name = userModels.Name,
                        Email = userModels.Email,
                        Password = userModels.Password,
                        IsLogged = userModels.IsLogged
                    }
                );

                return Ok();
            }
            catch (Exception exception)
            {
                return StatusCode(500, exception.Message);
            }
        }
    }
}