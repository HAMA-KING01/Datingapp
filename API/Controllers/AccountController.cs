using System;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Extensions;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController(AppDbContext context, ITokenService tokenService) : BaseAPIController
{
    [HttpPost("register")] //api/account/register
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        if (await EmailExists(registerDto.Email)) return BadRequest("Email taken");
      
        using var hmac = new HMACSHA512();

        var user = new AppUser
        {
            DisplayNmae = registerDto.DisplayNmae,
            Email = registerDto.Email,
            passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
            passwordSalt = hmac.Key

        };
        context.Users.Add(user);
        await context.SaveChangesAsync();
        
        return  user.ToDto(tokenService);
        
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await context.Users.SingleOrDefaultAsync(x => x.Email == loginDto.Email);

        if (user == null) return Unauthorized("Invalid email address");

        using var hmac = new HMACSHA512(user.passwordSalt);
        var ComputeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
        for (var i = 0; i < ComputeHash.Length; i++)
        {
            if (ComputeHash[i] != user.passwordHash[i]) return Unauthorized("InvalidCastException password");
        }

        return  user.ToDto(tokenService);
    }
    
    private async Task<bool> EmailExists(string email)
    {   
        return await context.Users.AnyAsync(x => x.Email.ToLower() == email.ToLower());
    }
}
