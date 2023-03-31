using API_AGT_Web.Music.Data;
using Microsoft.AspNetCore.Mvc;
using API_AGT_Web.Music;

namespace API_AGT_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusicController : ControllerBase
    {
        private MusicInMemoryRepository musicInMemoryRepository;
        public MusicController(IConfiguration configuration)
        {
            musicInMemoryRepository = new MusicInMemoryRepository();
        }
        [HttpGet]
        public IEnumerable<Music.Music> Get()
        {
            return musicInMemoryRepository.GetMusics();
        }
    }
}