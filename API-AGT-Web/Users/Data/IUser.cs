namespace API_AGT_Web.Users.Data
{
    public interface IUser
    {
        public IEnumerable<User> GetUsers();

        void createUser(IEnumerable<User> users);

        void LoginUser(string username, string password);

        void LogoutUser();
    }
}