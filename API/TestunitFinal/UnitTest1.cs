using API_AGT_Web.Users;
using API_AGT_Web.Users.Data;
using LiteDB;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Linq;

namespace TestunitFinal
{
    [TestClass]
    public class UsersLiteDbRepositoryTests
    {
        private Mock<LiteCollection<UserEntity>> _mockCollection;
        private Mock<LiteDatabase> _mockDatabase;

        [TestMethod]
        public void CreateUser_InsertsUsersIntoCollection()
        {
            // Arrange
            var usersRepo = new UsersLiteDbRepository(_mockDatabase.Object.ToString());
            var users = new List<User>
            {
                new User { Name = "John Doe", Email = "john@example.com", PasswordHash = "password" },
                new User { Name = "Jane Smith", Email = "jane@example.com", PasswordHash = "password" }
            };
            var expectedUserEntities = users.Select(u =>
                new UserEntity()
                {
                    Name = u.Name,
                    Email = u.Email,
                    PasswordHash = u.PasswordHash
                });

            _mockDatabase.Setup(db => db.GetCollection<UserEntity>(It.IsAny<string>(), It.IsAny<BsonAutoId>()))
                .Returns(_mockCollection.Object);

            // Act
            usersRepo.createUser(users);
        }

        [TestMethod]
        public void GetUserByUsername_ReturnsMatchingUser()
        {
            // Arrange
            var usersRepo = new UsersLiteDbRepository(_mockDatabase.Object.ToString());
            var username = "John Doe";
            var expectedUser = new User()
            {
                Name = username,
                Email = "john@example.com",
                PasswordHash = "password"
            };
            var expectedUserEntity = new UserEntity()
            {
                Name = username,
                Email = "john@example.com",
                PasswordHash = "password"
            };

            _mockDatabase.Setup(db => db.GetCollection<UserEntity>(It.IsAny<string>(), It.IsAny<BsonAutoId>()))
                .Returns(_mockCollection.Object);

            //   _mockCollection.Setup(c => c.Find(It.IsAny<BsonExpression>()))
            //     .Returns(new List<UserEntity> { expectedUserEntity });

            // Act
            var actualUser = usersRepo.GetUserByUsername(username);

            // Assert
            Assert.AreEqual(expectedUser.Name, actualUser.Name);
            Assert.AreEqual(expectedUser.Email, actualUser.Email);
            Assert.AreEqual(expectedUser.PasswordHash, actualUser.PasswordHash);
        }

        [TestInitialize]
        public void Initialize()
        {
            _mockCollection = new Mock<LiteCollection<UserEntity>>();
            _mockDatabase = new Mock<LiteDatabase>();
        }
    }
}