using System;
using Moq;

namespace API_AGT_Web.Tests
{
    [TestCla]
    public class UsersLiteDbRepositoryTests
    {
        private Mock<LiteDatabase> mockDatabase;
        private Mock<LiteCollection<API_AGT_Web.UserModel>> mockCollection;
        private UsersLiteDbRepository usersRepository;

        [TestInitialize]
        public void Setup()
        {
            // Create the mock LiteDB database and collection
            mockDatabase = new Mock<LiteDatabase>();
            mockCollection = new Mock<LiteCollection<UserEntity>>();

            // Setup the mock collection to return some data when queried
            var testData = new List<UserEntity>
        {
            new UserEntity { Name = "Alice", Email = "alice@example.com", PasswordHash = "hash1" },
            new UserEntity { Name = "Bob", Email = "bob@example.com", PasswordHash = "hash2" }
        };
            mockCollection.Setup(c => c.FindAll()).Returns(testData.AsQueryable());

            // Setup the mock database to return the mock collection
            mockDatabase.Setup(db => db.GetCollection<UserEntity>("users")).Returns(mockCollection.Object);

            // Create the UsersLiteDbRepository instance with the mock database connection string
            usersRepository = new UsersLiteDbRepository("mockConnectionString");
        }

        [TestMethod]
        public void GetUsers_ReturnsAllUsersFromDatabase()
        {
            // Act
            var result = usersRepository.GetUsers();

            // Assert
            Assert.AreEqual(2, result.Count());
            Assert.AreEqual("Alice", result.First().Name);
            Assert.AreEqual("bob@example.com", result.Last().Email);
        }
    }
}
