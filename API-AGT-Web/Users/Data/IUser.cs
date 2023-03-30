namespace API_AGT_Web.Users.Data
{
    public interface IUser
    {
        IEnumerable<User> GetUsers();

        void createUser();

        void LoginUser(string username, string password);

        void LogoutUser();
    }
}