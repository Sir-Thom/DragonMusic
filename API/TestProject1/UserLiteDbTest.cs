using API_AGT_Web.Users.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;

namespace API_AGT_Web.Tests
{
    [TestClass]
    public class UserInMemoryRepositoryTests
    {
        [TestMethod]
        public void GetUsers_ReturnsThreeUsers()
        {
            // Arrange
            var userRepository = new UserInMemoryRepository();

            // Act
            var users = userRepository.GetUsers();

            // Assert
            Assert.AreEqual(3, users.Count());
        }
    }
}