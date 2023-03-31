using API_AGT_Web.Music.Data;
using Microsoft.AspNetCore.Mvc;
using API_AGT_Web.Music;

namespace API_AGT_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusicController : ControllerBase
    {
        private readonly IMusic musicRepository;
        public MusicController(IConfiguration configuration)
        {
         musicRepository = new MusicLiteDbRepository(configuration["LiteDbFilePath"]);
         
        }
        [HttpGet]
        public IEnumerable<Music.Music> Get()
        {
            return musicRepository.GetMusics();
        }
    }
}