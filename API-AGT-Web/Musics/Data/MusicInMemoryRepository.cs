namespace API_AGT_Web.Music.Data
{
    public class MusicInMemoryRepository
    {
        private const string collectionName = "Musics";
        private List<Music> musics = new List<Music>
        {
            new Music()
            {
                NomMusique="RIP",Duree=69420,Auteur="Grim Reaper",Image="asset/died.gif"
            },
            new Music()
            {
                NomMusique="testation",Duree=35,Auteur="Jean-Marc",Image="asset/goofy_dragon.png"
            },
            new Music()
            {
                NomMusique="test2",Duree=69,Auteur="BABAJE",Image="asset/spag.png"
            }, 
            new Music()
            {
                NomMusique="Sad song",Duree=35,Auteur="Gabriel",Image="asset/Moai.png"
            },
            new Music()
            {
                NomMusique="testation2",Duree=35,Auteur="Maxime",Image="asset/MoaiVoiture.png"
            },
            new Music()
            {
                NomMusique="Fishium",Duree=35,Auteur="Maxance Gusse",Image="asset/fish.gif"
            },
            new Music()
            {
                NomMusique="we like fortnite",Duree=40,Auteur="FortiniteGamer",Image="asset/fortiniteSong.png"
            },
            new Music()
            {
                NomMusique="we like fortnite2",Duree=69,Auteur="Generated Gusse Feet",Image="asset/GoussePied.png"
            },
            new Music()
            {
                NomMusique="I am dancing",Duree=35,Auteur="Green Dancing Guy",Image="asset/dance.webp"
            },
            new Music()
            {   
                NomMusique="Moyai",Duree=30,Auteur="Le Bolduc",Image="asset/moyai-dancing.gif"
            }
        };
        public IEnumerable<Music> GetMusics()
        {
            return Enumerable.Range(0, 9).Select(Index => new Music()
            {
                NomMusique = musics[Index].NomMusique,
                Duree = musics[Index].Duree,
                Auteur = musics[Index].Auteur,
                Image = musics[Index].Image
            });
        }
    }
}
