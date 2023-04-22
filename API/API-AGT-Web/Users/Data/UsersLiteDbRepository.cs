using LiteDB;

namespace API_AGT_Web.Users.Data
{
    public class UsersLiteDbRepository : IUser
    {
        private const string collectionName = "users";
        private readonly string connectionString;

        public UsersLiteDbRepository(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public void createOneUser(User users)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<UserEntity>(collectionName);

                collection.Insert(new UserEntity()
                {
                    Name = users.Name,
                    Email = users.Email,
                    PasswordHash = users.PasswordHash
                });
            }
        }

        public void createUser(IEnumerable<User> users)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<UserEntity>(collectionName);

                if (collection.Count() == 0)
                    collection.InsertBulk(users.Select(u =>
                        new UserEntity()
                        {
                            Name = u.Name,
                            Email = u.Email,
                            PasswordHash = u.PasswordHash
                        }
                    ));
            }
        }

        public User GetUserByUsername(string username)
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<UserEntity>(collectionName);

                var userEntity = collection.Find(u => u.Name == username).FirstOrDefault();

                if (userEntity is null)
                    return new User();

                return new User()
                {
                    Name = userEntity.Name,
                    Email = userEntity.Email,
                    PasswordHash = userEntity.PasswordHash
                };
            }
        }

        IEnumerable<User> IUser.GetUsers()
        {
            using (var db = new LiteDatabase(connectionString))
            {
                var collection = db.GetCollection<UserEntity>(collectionName);

                return collection.FindAll().Select(u =>
                    new User()
                    {
                        Name = u.Name,
                        Email = u.Email,
                        PasswordHash = u.PasswordHash,
                    }
                );
            }
        }

        public void LoginUser(string username, string password)
        {
            throw new NotImplementedException();
        }

        public void LogoutUser()
        {
            throw new NotImplementedException();
        }
    }
}