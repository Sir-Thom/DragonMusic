using API_AGT_Web.Users;

namespace API_AGT_Web.Music.Data
{
    public interface IMusicLiteDbRepository
    {
        public IEnumerable<Music> GetMusics();

        Music GetMusicById(int idMusic); 

        void AddMusic(Music music);

        void updateImagePathGivenMusic(string filePath);
    }
}
