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
            userRepository.createUser();
        }

        [HttpGet]
        public IEnumerable<User> Get()

        {
            return userRepository.GetUsers();
        }
    }
}