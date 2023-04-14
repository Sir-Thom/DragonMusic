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
        private IMusicLiteDbRepository music;
        public MusicController(IConfiguration configuration)
        {
            musicInMemoryRepository = new MusicInMemoryRepository();
            music = new MusicLiteDbRepository(configuration["LiteDbFilePath"]);
        }
        [HttpGet]
        public IEnumerable<MusicModels> Get()
        {
            return music.GetMusics().Select(m=>
            new MusicModels()
            {
                NomMusique=m.NomMusique,
                Duree = m.Duree,
                Auteur = m.Auteur,
                Image = m.Image
            })
               ;
        }

        

        [HttpGet("{nomMusique}")]
        public IActionResult GetActionResult(string nomMusique)
        {
            try
            {
                var musique = music.GetMusicByName(nomMusique);
                if (musique.NomMusique == "")
                    return BadRequest("musique invalide");
                return Ok(music.GetMusicByName(nomMusique));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}