using API_AGT_Web.Controllers;
using API_AGT_Web.Music.Data;
using API_AGT_Web.Music;
using Moq;
using LiteDB;
using Microsoft.VisualStudio.TestTools;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestUnit
{
    [TestClass]

    public class MusicLiteDbTest
    {
        Mock<LiteCollection<Music>> mockCollection;
        Mock<LiteCollection<MusicModels>> mockCollectionModels;
        Mock<IMusicLiteDbRepository> musicLiteDbRepository = new Mock<IMusicLiteDbRepository>(MockBehavior.Strict);
        Mock<LiteDatabase> mockDb;
        Mock<MusicController> mockController;
        MusicLiteDbRepository musicRepo;
        Mock<MusicLiteDbRepository> musicLiteDbRepositoryMock;

        [TestMethod]
        public void TestAddMusic()
        {
            // Given
            Music music = new Music
            {
                NomMusique = "Test Music",
                Image = "test-image.jpg",
                Duree = 180,
                Auteur = "Test Author"
            };
            //musicLiteDbRepository.Setup(r => r.AddMusic(music));
            //Test method TestUnit.MusicLiteDbTest.TestAddMusic threw exception: 
            //System.NullReferenceException: Object reference not set to an instance of an object.

            // When
            musicRepo.AddMusic(music);
            //var result = controller.AddMusic(music) as OkResult;

            // Then
            musicLiteDbRepository.Verify(r => r.AddMusic(music), Times.Once);
        }

        //[TestMethod]
        //public void GetMusic_ReturnsMusic()
        //{
        //    // Arrange
        //    var repository = new MusicLiteDbRepository("connectionString", "collectionName");
        //    var expectedMusics = new List<Music>()
        //    {
        //       new Music { Id = 1, NomMusique = "Song1", Duree = 240, Auteur = "Author1", Image = "Image1" },
        //       new Music { Id = 2, NomMusique = "Song2", Duree = 180, Auteur = "Author2", Image = "Image2" },
        //       new Music { Id = 3, NomMusique = "Song3", Duree = 300, Auteur = "Author3", Image = "Image3" }
        //    };

        //    // Act
        //    var actualMusics = repository.GetMusics();

        //    // Assert
        //    Assert.AreEqual(expectedMusics.Count(), actualMusics.Count());

        //    foreach (var expectedMusic in expectedMusics)
        //    {
        //        var actualMusic = actualMusics.FirstOrDefault(m => m.Id == expectedMusic.Id);
        //        Assert.IsNotNull(actualMusic);
        //        Assert.AreEqual(expectedMusic.NomMusique, actualMusic.NomMusique);
        //        Assert.AreEqual(expectedMusic.Duree, actualMusic.Duree);
        //        Assert.AreEqual(expectedMusic.Auteur, actualMusic.Auteur);
        //        Assert.AreEqual(expectedMusic.Image, actualMusic.Image);
        //    }



        /* // Arrange
        var MusicRepository = musicLiteDbRepositoryMock;

        // Act
        var musics = MusicRepository();

        // Assert
        Assert.AreEqual(3, musics.Count());*/
    }
}

