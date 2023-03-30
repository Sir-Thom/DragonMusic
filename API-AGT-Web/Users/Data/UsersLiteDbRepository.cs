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
                            Password = u.Password,
                        }
                    ));
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
                        Password = u.Password,
                        l
                    }
                );
            }
        }
    }
}