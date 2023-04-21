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
        public IEnumerable<Music.Music> Get()
        {
            return musicRepository.GetMusics().Select(m=>
            new Music.Music()
            {   
                Id = m.Id,
                NomMusique=m.NomMusique,
                Duree = m.Duree,
                Auteur = m.Auteur,
                Image = m.Image
            })
               ;
        }

        

        [HttpGet("{idMusic}")]
        public IActionResult GetActionResult(int idMusic)
        {
            try
            {
                var musique = musicRepository.GetMusicById(idMusic);
                if (musique.Id <0)
                    return BadRequest("musique invalide");
                return Ok(musique);
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