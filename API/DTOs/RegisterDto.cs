using System;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace API.DTOs;

public class RegisterDto
{
    public required string DisplayNmae{ get; set;}
    public required string Email{ get; set;}
    public required string Password{ get; set;}
}
