using LiteDB;

namespace API_AGT_Web.Users.Data
{
    public class UserInMemoryRepository : IUser
    {
        private const string collectionName = "users";

        private List<User> users = new List<User>
        {
            new User()
            {
                    Name = "John Doe",
                    Email = "johndoe@example.com",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("password")
            },
            new User()
            {
                 Name = "human",
                 Email = "human@example.com",
                 PasswordHash = BCrypt.Net.BCrypt.HashPassword("human")
            }
            ,
            new User()
            {
                 Name = "human1",
                 Email = "human1@example.com",
                 PasswordHash = BCrypt.Net.BCrypt.HashPassword("human1")
            }
        };

        private Random random = new Random();

        public void createUser(IEnumerable<User> users)
        {
            //ajoute des utilisateurs
        }

        public void LoginUser(string username, string password)
        {
            //ser à la connexion
            throw new System.NotImplementedException();
        }

        public void LogoutUser()
        {
            //sert à la déconnexion

            throw new NotImplementedException();
        }

        public IEnumerable<User> GetUsers()
        {
            return Enumerable.Range(0, 3).Select(index => new User()
            {
                Name = users[index].Name,
                Email = users[index].Email,
                PasswordHash = users[index].PasswordHash
            });
        }

        public void createOneUser(User users)
        {
            
        }

        public User GetUserByUsername(string username, string email)
        {
            throw new NotImplementedException();
        }
    }
}