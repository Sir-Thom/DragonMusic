﻿using API_AGT_Web.Users;

namespace API_AGT_Web.Music.Data
{
    public interface IMusicLiteDbRepository
    {
        public IEnumerable<Music> GetMusics();

        Music GetMusicByName(string nomMusique); 

        void AddMusic(Music music);
    }
}
