using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    //[Authorize] // if i cahnge a place of [Authorize] and [AllowAnonymous] 
    // we get an error we cant do it like that
    
    public class MembersController(AppDbContext context) : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var members = await context.Users.ToListAsync();
            return members;
        }

        //[AllowAnonymous]//if i want to one of the user be anonmouse

         [Authorize]
        [HttpGet("{id}")] // localcalhost:5264/api/member/bob-id
        public async Task<ActionResult<AppUser>> GetMember(string id)
        {
            var member = await context.Users.FindAsync(id);
            if (member == null) return NotFound();
            return member;
        }
    }
}
