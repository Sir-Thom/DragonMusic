using API_AGT_Web.Music.Data;
using Microsoft.AspNetCore.Mvc;
using API_AGT_Web.Music;

namespace API_AGT_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusicController : ControllerBase
    {
        private IMusicLiteDbRepository musicRepository;
        public MusicController(IConfiguration configuration)
        {
            musicRepository = new MusicLiteDbRepository(configuration["LiteDbFilePath"]);
        }
        [HttpGet]
        public IEnumerable<MusicModels> Get()
        {
            return musicRepository.GetMusics().Select(m=>
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
                var musique = musicRepository.GetMusicByName(nomMusique);
                if (musique.NomMusique == "")
                    return BadRequest("musique invalide");
                return Ok(musicRepository.GetMusicByName(nomMusique));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AddMusic(MusicModels music)
        {
            try
            {
                musicRepository.AddMusic(new Music.Music()
                {
                    NomMusique = music.NomMusique,
                    Image = music.Image,
                    Duree = music.Duree,
                    Auteur = music.Auteur
                });

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}