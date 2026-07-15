using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("api/users")]
public class UsersController : ControllerBase
{
    List<User> users = new List<User>{
            new User
            {
                Id = 1,
                Name = "Ali",
                Email = "ali@test.com",
                Role = "Admin"
            },
            new User
            {
                Id = 2,
                Name = "Mark",
                Email = "mark@test.com"
            }
        };


    [HttpGet]
    public IEnumerable<User> GetUsers()
    {
        return users;
    }

    [HttpGet()]
    [Route("names")]
    public IEnumerable<string> GetUsersName()
    {
        return users.Select(x=>x.Name);
    }
}