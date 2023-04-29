using API_AGT_Web.Users.Data;
using API_AGT_Web.Users;
using LiteDB;
using System.IO;
using NAudio.Wave;
using System.Reflection.Metadata.Ecma335;

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
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Nintendo Wii - Mii Channel Theme.mp3"),
                    Auteur = "Grim Reaper",
                    Image = "asset/died.gif",
                    MusicFile ="asset/music/Nintendo Wii - Mii Channel Theme.mp3"
                },
                new Music()
                {
                    Id=2,
                    NomMusique = "testation",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "Jean-Marc",
                    Image = "asset/goofy_dragon.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music(){
                    Id=3,
                    NomMusique = "test2",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "BABAJE",
                    Image = "asset/spag.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=4,
                    NomMusique = "Sad song",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "Gabriel",
                    Image = "asset/Moai.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=5,
                    NomMusique = "testation2",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "Maxime",
                    Image = "asset/MoaiVoiture.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=6,
                    NomMusique = "Fishium",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "Maxance Gusse",
                    Image = "asset/fish.gif",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=7,
                    NomMusique = "we like fortnite",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "FortiniteGamer",
                    Image = "asset/fortiniteSong.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=8,
                    NomMusique = "we like fortnite2",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "Generated Gusse Feet",
                    Image = "asset/GoussePied.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=9,
                    NomMusique = "I am dancing",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\Hank steel the real queer cowboy.mp3"),
                    Auteur = "Green Dancing Guy",
                    Image = "asset/dance.webp",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=10,
                    NomMusique = "Moyai",
                    Duree = setupDurationForMusicInMemory("..\\..\\public\\asset\\music\\bluegrass banjo - country banjo.mp3"),
                    Auteur = "Le Bolduc",
                    Image = "asset/moyai-dancing.gif",
                    MusicFile ="asset/music/bluegrass banjo - country banjo.mp3"
                }
            };
            return musicList;
        }

        private int setupDurationForMusicInMemory(string path)
        {
            var fileInfo = new FileInfo(path);

            using (var audioFile = new AudioFileReader(path))
            {
                var duration = audioFile.TotalTime.TotalSeconds;
                return (int)Math.Round(duration);
            }
        }


        public Music GetMusicById(int idMusic)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<MusicEntity>(collectionName);
                var musicEntity = collection.Find(m => m.Id == idMusic).FirstOrDefault();

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
                music.Image = "..\\asset\\" + fileName;
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
                music.MusicFile = "..\\asset\\music\\" + fileName;
                collection.Update(music);
            }
        }
    }
}
