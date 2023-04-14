﻿namespace API_AGT_Web.Users
{
    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PasswordHash { get; set; } = "";

        public bool IsLogged { get; set; }
    }
}