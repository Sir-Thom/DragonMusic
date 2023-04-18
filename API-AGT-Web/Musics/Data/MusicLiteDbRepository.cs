using API_AGT_Web.Users.Data;
using API_AGT_Web.Users;
using LiteDB;

namespace API_AGT_Web.Music.Data
{
    public class MusicLiteDbRepository:IMusicLiteDbRepository
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
                    collection.InsertBulk(InitializeSong().Select(m => new MusicEntity(){ 
                        NomMusique = m.NomMusique,
                        Duree = m.Duree,
                        Auteur = m.Auteur,
                        Image = m.Image
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
                NomMusique = "RIP",Duree = 69420,Auteur = "Grim Reaper",Image = "asset/died.gif"
             },
             new Music(){
                NomMusique = "testation",Duree = 35,Auteur = "Jean-Marc",Image = "asset/goofy_dragon.png"
             },
             new Music(){
              NomMusique = "test2",Duree = 69,Auteur = "BABAJE",Image = "asset/spag.png"
             },
            new Music()
            {
                NomMusique = "Sad song",Duree = 35,Auteur = "Gabriel",Image = "asset/Moai.png"
            },

             new Music()
             {
                 NomMusique = "testation2",
                 Duree = 35,
                 Auteur = "Maxime",
                 Image = "asset/MoaiVoiture.png"
             },

            new Music()
            {
                NomMusique = "Fishium",
                Duree = 35,
                Auteur = "Maxance Gusse",
                Image = "asset/fish.gif"
            },

            new Music()
            {
                NomMusique = "we like fortnite",
                Duree = 40,
                Auteur = "FortiniteGamer",
                Image = "asset/fortiniteSong.png"
            },

             new Music()
             {
                 NomMusique = "we like fortnite2",
                 Duree = 69,
                 Auteur = "Generated Gusse Feet",
                 Image = "asset/GoussePied.png"
             },

             new Music()
             {
                 NomMusique = "I am dancing",
                 Duree = 35,
                 Auteur = "Green Dancing Guy",
                 Image = "asset/dance.webp"
             },

             new Music()
             {
                 NomMusique = "Moyai",
                 Duree = 30,
                 Auteur = "Le Bolduc",
                 Image = "asset/moyai-dancing.gif"
             }
        };
            return musicList;
        }


        public Music GetMusicByName(string nomMusique)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<MusicEntity>(collectionName);
                var musicEntity = collection.Find(m => m.NomMusique == nomMusique).FirstOrDefault();

                return new Music()
                {
                    NomMusique = musicEntity.NomMusique,
                    Duree = musicEntity.Duree,
                    Auteur = musicEntity.Auteur,
                    Image = musicEntity.Image,
                    
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
                        NomMusique = u.NomMusique,
                        Duree = u.Duree,
                        Auteur = u.Auteur,
                        Image = u.Image
                    }
                );
            }
        }

        public void AddMusic(Music music)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<MusicEntity>(collectionName);
                collection.Insert(new MusicEntity()
                {
                    Auteur = music.Auteur,
                    Duree = music.Duree,
                    Image = music.Image,
                    NomMusique = music.NomMusique
                });
            }
        }
    }
}
