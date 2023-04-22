using System.Collections.Generic;
using API_AGT_Web.Users.Data;
using LiteDB;
using Moq;

namespace API_AGT_Web.Tests.Users.Data
{
    [SetUp]
    public void SetUp()
    {
        mockCollection = new Mock<LiteCollection<UserEntity>>();
        mockDb = new Mock<LiteDatabase>();
        mockDb.Setup(db => db.GetCollection<UserEntity>("users")).Returns(mockCollection.Object);
    }

    public class UsersLiteDbRepositoryTests
    {
        private Mock<LiteCollection<UserEntity>> mockCollection;
        private Mock<LiteDatabase> mockDb;

        [Test]
        public void CreateOneUser_InsertsUserEntityIntoCollection()
        {
            // Arrange
            var usersRepo = new UsersLiteDbRepository(mockDb.Object);
            var user = new User() { Name = "John Doe", Email = "john@example.com", PasswordHash = "password" };
            var expectedUserEntity = new UserEntity() { Name = "John Doe", Email = "john@example.com", PasswordHash = "password" };

            // Act
            usersRepo.createOneUser(user);

            // Assert
            mockCollection.Verify(c => c.Insert(expectedUserEntity), Times.Once());
        }

        [Test]
        public void CreateUser_DoesNotInsertUserEntitiesIntoCollectionIfCollectionIsNotEmpty()
        {
            // Arrange
            var usersRepo = new UsersLiteDbRepository(mockDb.Object);
            var users = new List<User>() {
                new User() { Name = "John Doe", Email = "john@example.com", PasswordHash = "password" },
                new User() { Name = "Jane Doe", Email = "jane@example.com", PasswordHash = "password" },
            };
            mockCollection.Setup(c => c.Count()).Returns(1);

            // Act
            usersRepo.createUser(users);

            // Assert
            mockCollection.Verify(c => c.InsertBulk(It.IsAny<IEnumerable<UserEntity>>()), Times.Never());
        }

        [Test]
        public void CreateUser_InsertsUserEntitiesIntoCollectionIfCollectionIsEmpty()
        {
            // Arrange
            var usersRepo = new UsersLiteDbRepository(mockDb.Object);
            var users = new List<User>() {
                new User() { Name = "John Doe", Email = "john@example.com", PasswordHash = "password" },
                new User() { Name = "Jane Doe", Email = "jane@example.com", PasswordHash = "password" },
            };
            var expectedUserEntities = new List<UserEntity>() {
                new UserEntity() { Name = "John Doe", Email = "john@example.com", PasswordHash = "password" },
                new UserEntity() { Name = "Jane Doe", Email = "jane@example.com", PasswordHash = "password" },
            };
            mockCollection.Setup(c => c.Count()).Returns(0);

            // Act
            usersRepo.createUser(users);

            // Assert
            mockCollection.Verify(c => c.InsertBulk(expectedUserEntities), Times.Once());
        }
    }
}