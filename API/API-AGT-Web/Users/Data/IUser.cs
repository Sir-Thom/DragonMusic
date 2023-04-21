namespace API_AGT_Web.Users.Data
{
    public interface IUser
    {
        public IEnumerable<User> GetUsers();

        void createOneUser(User users);

        void createUser(IEnumerable<User> users);

        void LoginUser(string username, string password);

        void LogoutUser();
        User GetUserByUsername(string username);
    }
}