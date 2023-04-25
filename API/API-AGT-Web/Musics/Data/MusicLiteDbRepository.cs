using API_AGT_Web.Users.Data;
using API_AGT_Web.Users;
using LiteDB;

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
                    Duree = 69420,
                    Auteur = "Grim Reaper",
                    Image = "asset/died.gif",
                    MusicFile ="asset/music/Nintendo Wii - Mii Channel Theme.mp3"
                },
                new Music()
                {
                    Id=2,
                    NomMusique = "testation",
                    Duree = 35,
                    Auteur = "Jean-Marc",
                    Image = "asset/goofy_dragon.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music(){
                    Id=3,
                    NomMusique = "test2",
                    Duree = 69,
                    Auteur = "BABAJE",
                    Image = "asset/spag.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=4,
                    NomMusique = "Sad song",
                    Duree = 35,
                    Auteur = "Gabriel",
                    Image = "asset/Moai.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=5,
                    NomMusique = "testation2",
                    Duree = 35,
                    Auteur = "Maxime",
                    Image = "asset/MoaiVoiture.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=6,
                    NomMusique = "Fishium",
                    Duree = 35,
                    Auteur = "Maxance Gusse",
                    Image = "asset/fish.gif",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=7,
                    NomMusique = "we like fortnite",
                    Duree = 40,
                    Auteur = "FortiniteGamer",
                    Image = "asset/fortiniteSong.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=8,
                    NomMusique = "we like fortnite2",
                    Duree = 69,
                    Auteur = "Generated Gusse Feet",
                    Image = "asset/GoussePied.png",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=9,
                    NomMusique = "I am dancing",
                    Duree = 35,
                    Auteur = "Green Dancing Guy",
                    Image = "asset/dance.webp",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                },
                new Music()
                {
                    Id=10,
                    NomMusique = "Moyai",
                    Duree = 30,
                    Auteur = "Le Bolduc",
                    Image = "asset/moyai-dancing.gif",
                    MusicFile ="asset/music/Hank steel the real queer cowboy.mp3"
                }
            };
            return musicList;
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
                music.MusicFile = "asset/music/" + fileName;
                collection.Update(music);
            }
        }
    }
}
