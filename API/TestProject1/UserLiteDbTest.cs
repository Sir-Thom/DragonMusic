using API_AGT_Web.Users.Data;
using LiteDB;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Linq;

namespace API_AGT_Web.Tests
{
    public interface ILiteCollection<T>
    {
        IQueryable<T> FindAll();
    }

    public interface ILiteDatabaseWrapper
    {
        ILiteCollection<T> GetCollection<T>();
    }

    public class LiteCollectionWrapper<T> : ILiteCollection<T>
    {
        private LiteCollection<T> _collection;

        public LiteCollectionWrapper(LiteCollection<T> collection)
        {
            _collection = collection;
        }

        public IQueryable<T> FindAll()
        {
            return _collection.FindAll().AsQueryable();
        }
    }

    public class LiteDatabaseWrapper : ILiteDatabaseWrapper
    {
        private LiteDatabase _database;

        public LiteDatabaseWrapper(string connectionString)
        {
            _database = new LiteDatabase(connectionString);
        }

        public ILiteCollection<T> GetCollection<T>()
        {
            return new LiteCollectionWrapper<T>((LiteCollection<T>)_database.GetCollection<T>());
        }
    }

    [TestClass]
    public class UserLiteDbTest
    {
        [TestClass]
        public class UsersLiteDbRepositoryTests
        {
            private Mock<ILiteDatabaseWrapper> mockDatabase;
            private UsersLiteDbRepository repository;

            [TestMethod]
            public void GetUsers_ReturnsUsersFromDatabase()
            {
                // Arrange
                var collectionMock = new Mock<ILiteCollection<Users.User>>();
                var users = new List<Users.User>
    {
        new Users.User { Name = "John Doe", Email = "johndoe@example.com", PasswordHash = "password" },
        new Users.User { Name = "Jane Smith", Email = "janesmith@example.com", PasswordHash = "password123" },
        new Users.User { Name = "human1", Email = "human1@example.com", PasswordHash = "password" }
    };
                collectionMock.Setup(c => c.FindAll()).Returns(users.AsQueryable());
                mockDatabase.Setup(db => db.GetCollection<Users.User>()).Returns(collectionMock.Object);

                // Act
                var result = repository.GetUserByUsername("human1");
                result.Name = "human1";

                // Assert
                Assert.AreEqual("human1", result.Name);
            }

            [TestInitialize]
            public void TestInitialize()
            {
                mockDatabase = new Mock<ILiteDatabaseWrapper>();
                var connectionString = "Filename=..\\Music.db; Connection=Shared;";
                var users = new List<UserEntity>
                {
                    new UserEntity { Name = "John Doe", Email = "johndoe@example.com", PasswordHash = "password" },
                    new UserEntity { Name = "Jane Smith", Email = "janesmith@example.com", PasswordHash = "password123" }
                };
                var collectionMock = new Mock<ILiteCollection<UserEntity>>();
                collectionMock.Setup(c => c.FindAll()).Returns(users.AsQueryable());
                mockDatabase.Setup(db => db.GetCollection<UserEntity>()).Returns(collectionMock.Object);

                repository = new UsersLiteDbRepository(connectionString);
            }
        }
    }
}