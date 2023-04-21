﻿using API_AGT_Web.Music.Data;
using Microsoft.AspNetCore.Mvc;
using API_AGT_Web.Music;
using static System.Net.Mime.MediaTypeNames;

namespace API_AGT_Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusicController : ControllerBase
    {
        private IMusicLiteDbRepository musicRepository;
        const string directoryPath = "C:\\Users\\Client\\Desktop\\projet-agt-travail-session\\public\\asset\\";
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
            });
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

        [HttpPost("/Image")]
        public IActionResult SaveImageInSystem(IFormFile image)
        {
            if (!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }

            try
            {
                if (image is null)
                    return StatusCode(StatusCodes.Status400BadRequest, new { message = "Aucune image dans la requête" });

                if (image.Length > 0)
                {
                    var fileName = image.FileName;
                    var filePath = Path.Combine(directoryPath, fileName);
                    var fileExtension = Path.GetExtension(filePath).ToLower();

                    if (fileExtension != ".gif" && fileExtension != ".jpg" && fileExtension != ".jpeg" &&
                         fileExtension != ".png" && fileExtension != ".webp")
                        return StatusCode(StatusCodes.Status400BadRequest, new { message = "Ce format n'est pas supporté" });

                    if (!System.IO.File.Exists(filePath))
                    {
                        using (Stream fileStream = new FileStream(filePath, FileMode.Create))
                        {
                            image.CopyTo(fileStream);
                        }
                    }

                    musicRepository.updateImagePathGivenMusic(filePath);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(700, ex.Message);
            }
        }        
    }
}