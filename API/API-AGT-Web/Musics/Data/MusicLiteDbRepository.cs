using API_AGT_Web.Users.Data;
using API_AGT_Web.Users;
using LiteDB;


using System.Reflection.Metadata.Ecma335;
using System;
using System.IO;
using Xabe.FFmpeg;
namespace API_AGT_Web.Music.Data
{
    public class MusicLiteDbRepository : IMusicLiteDbRepository
    {
        private const string collectionName = "musics";
        private readonly string connectionString;

        public MusicLiteDbRepository(string connectionString)
        {
            this.connectionString = connectionString;

            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<MusicEntity>(collectionName);
                var nombreMusic = collection.FindAll();
                if (nombreMusic.Count() == 0)
                {
                    collection.InsertBulk(InitializeSong().Select(m => new MusicEntity()
                    {
                        Id = m.Id,
                        NomMusique = m.NomMusique,
                        Duree = m.Duree,
                        Auteur = m.Auteur,
                        Image = m.Image,
                        MusicFile = m.MusicFile
                    }));
                }
            }
        }
        private List<Music> InitializeSong()
        {
            var musicList = new List<Music>()
            {
                new Music()
                {
                    Id=1,
                    NomMusique = "RIP",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Nintendo Wii - Mii Channel Theme.mp3"),
                    Auteur = "Grim Reaper",
                    Image = "asset/died.gif",
                    MusicFile ="asset/music/Nintendo Wii - Mii Channel Theme.mp3"
                },
                new Music()
                {
                    Id=2,
                    NomMusique = "testation",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Lynyrd Skynyrd-Free Bird (GUITAR SOLO).mp3"),
                    Auteur = "Jean-Marc",
                    Image = "asset/goofy_dragon.png",
                    MusicFile ="asset/music/Lynyrd Skynyrd-Free Bird (GUITAR SOLO).mp3"
                },
                new Music(){
                    Id=3,
                    NomMusique = "test2",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Lynyrd Skynyrd - Sweet Home Alabama (Audio).mp3"),
                    Auteur = "BABAJE",
                    Image = "asset/spag.png",
                    MusicFile ="asset/music/Lynyrd Skynyrd - Sweet Home Alabama (Audio).mp3"
                },
                new Music()
                {
                    Id=4,
                    NomMusique = "Sad song",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Hank steel the real queer cowboy.mp3"),
                    Auteur = "Gabriel",
                    Image = "asset/Moai.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=5,
                    NomMusique = "Moyai Kart OST",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Coconut Mall - Mario Kart Wii OST.mp3"),
                    Auteur = "Moyai",
                    Image = "asset/MoaiVoiture.png",
                    MusicFile ="asset/music/Coconut Mall - Mario Kart Wii OST.mp3"
                },
                new Music()
                {
                    Id=6,
                    NomMusique = "Fishium",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/fish.mp3"),
                    Auteur = "Le Fishe",
                    Image = "asset/fish.gif",
                    MusicFile ="asset/music/fish.mp3"
                },
                new Music()
                {
                    Id=7,
                    NomMusique = "we like fortnite",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Rubber Band.mp3"),
                    Auteur = "FortiniteGamer",
                    Image = "asset/fortiniteSong.png",
                    MusicFile ="asset/music/Rubber Band.mp3"
                },
                new Music()
                {
                    Id=8,
                    NomMusique = "Smelly Feet",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Feet.mp3"),
                    Auteur = "Feet",
                    Image = "asset/GoussePied.png",
                    MusicFile ="asset/music/Feet.mp3"
                },
                new Music()
                {
                    Id=9,
                    NomMusique = "I am dancing",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Aaron Smith - Dancin - Krono Remix (Official Video) ft. Luvli.mp3"),
                    Auteur = "Green Dancing Guy",
                    Image = "asset/dance.webp",
                    MusicFile ="asset/music/Aaron Smith - Dancin - Krono Remix (Official Video) ft. Luvli.mp3"
                },
                new Music()
                {
                    Id=10,
                    NomMusique = "Moyai",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/bluegrass banjo - country banjo.mp3"),
                    Auteur = "Le Bolduc",
                    Image = "asset/moyai-dancing.gif",
                    MusicFile ="asset/music/bluegrass banjo - country banjo.mp3"
                },
                   new Music()
                {
                    Id=11,
                    NomMusique = "Giga Chad",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/gigachad.mp3"),
                    Auteur = "Chad",
                    Image = "asset/chad.jpeg",
                    MusicFile ="asset/music/gigachad.mp3"
                },
                new Music()
                {
                    Id=12,
                    NomMusique = "Hamburger",
                    Duree = setupDurationForMusicInMemory("../../build/asset/music/Hamburger Cheeseburger Big Mac Whopper (Full Version).mp3"),
                    Auteur = "Hamburger",
                    Image = "asset/hamburger.gif",
                    MusicFile ="asset/music/Hamburger Cheeseburger Big Mac Whopper (Full Version).mp3"
                },
            };
            return musicList;
        }


        private int setupDurationForMusicInMemory(string path)
        {
            var music = Xabe.FFmpeg.FFmpeg.GetMediaInfo(path).Result;
            var musicDuration = music.Duration.TotalSeconds;
            var duration = Math.Floor(musicDuration);
            return (int)duration;
            /* var fileInfo = new FileInfo(path);

                        using (var file = System.IO.File.Create(filePath))
                        {
                            var duration = (int)file.Properties.Duration.TotalSeconds;
                            return duration;
                        }*/
        }


        public Music GetMusicById(int idMusic)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<MusicEntity>(collectionName);
                var musicEntity = collection.Find(m => m.Id == idMusic).FirstOrDefault();

                if (musicEntity is null)
                {
                    return null;
                }

                return new Music()
                {
                    Id = musicEntity.Id,
                    NomMusique = musicEntity.NomMusique,
                    Duree = musicEntity.Duree,
                    Auteur = musicEntity.Auteur,
                    Image = musicEntity.Image,
                    MusicFile = musicEntity.MusicFile

                };
            }
        }

        IEnumerable<Music> IMusicLiteDbRepository.GetMusics()
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<Music>(collectionName);
                return collection.FindAll().Select(u =>
                    new Music()
                    {
                        Id = u.Id,
                        NomMusique = u.NomMusique,
                        Duree = u.Duree,
                        Auteur = u.Auteur,
                        Image = u.Image,
                        MusicFile = u.MusicFile
                    }
                );
            }
        }

        public void AddMusic(Music music)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<MusicEntity>(collectionName);
                collection.EnsureIndex(x => x.Id, true);
                collection.Insert(new MusicEntity()
                {
                    Auteur = music.Auteur,
                    Duree = music.Duree,
                    Image = music.Image,
                    NomMusique = music.NomMusique,
                    MusicFile = music.MusicFile
                });
            }
        }

        public void updateImagePathGivenMusic(string fileName)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<Music>(collectionName);
                int lastId = collection.Max(x => x.Id);
                Music music = collection.FindById(lastId);
                music.Image = "../asset/" + fileName;
                collection.Update(music);
            }
        }

        public void updateMusicPathGivenMusic(string fileName)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<Music>(collectionName);
                int lastId = collection.Max(x => x.Id);
                Music music = collection.FindById(lastId);
                music.MusicFile = "../asset/music/" + fileName;
                collection.Update(music);
            }
        }
    }
}
