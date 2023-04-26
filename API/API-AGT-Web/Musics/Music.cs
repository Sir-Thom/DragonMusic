namespace API_AGT_Web.Music
{
    public class Music
    {
        public int Id { get; set; }
        public string NomMusique { get; set; } = "";
        public int Duree { get; set; } = 0;
        public string Auteur { get; set; } = "";
        public string Image { get; set; } = "";
        public string MusicFile { get; set; } = "";
    }
}