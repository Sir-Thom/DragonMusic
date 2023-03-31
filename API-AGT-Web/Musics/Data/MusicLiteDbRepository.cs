using LiteDB;

namespace API_AGT_Web.Music.Data
{
    public class MusicLiteDbRepository:IMusic
    {
        private const string collectionName = "musics";
        private readonly string connectionString;

        public MusicLiteDbRepository(string connectionString)
        {
            this.connectionString = connectionString;
        }
        IEnumerable<Music> IMusic.GetMusics()
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
    }
}
