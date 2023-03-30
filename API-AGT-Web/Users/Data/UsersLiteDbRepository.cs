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

        public void createUser()
        {
            var user = new User
            {
                Name = "John Doe",
                Email = "johndoe@example.com",
                Password = "mysecretpassword"
            };
            //changer path pour le mettre dans le projets
            using (var db = new LiteDatabase(connectionString))
            {
                var users = db.GetCollection<User>("users");
                users.Insert(user);
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
                    }
                );
            }
        }
    }
}