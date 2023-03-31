﻿using LiteDB;

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
                    Password = "password"
            },
            new User()
            {
                 Name = "human",
                 Email = "human@example.com",
                 Password = "human"
            }
            ,
            new User()
            {
                 Name = "human1",
                 Email = "human1@example.com",
                 Password = "human1"
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
                Password = users[index].Password
            });
        }

        public void createOneUser(User users)
        {
            
        }
    }
}