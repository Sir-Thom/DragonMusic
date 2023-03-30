namespace API_AGT_Web.Users.Data
{
    public class UserInMemoryRepository : IUser
    {
        private const string collectionName = "users";

        public void createUser()
        {
            throw new System.NotImplementedException();
        }

        public void LoginUser(string username, string password)
        {
            throw new System.NotImplementedException();
        }

        public void LogoutUser()
        {
            throw new NotImplementedException();
        }

        IEnumerable<User> IUser.GetUsers()
        {
            return new List<User>
            {
                new User
                {
                    Name = "John Doe",
                    Email = "johndoe@example.com",
                    Password = "password"
                }
            }.ToArray();
        }
    }
}