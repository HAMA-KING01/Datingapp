using System;
using System.Runtime.ConstrainedExecution;
using System.Security.Cryptography.X509Certificates;

namespace API.DTOs;

public class LoginDto
{
    public string Email { get; set; } = "";
    public string Password { get; set; } = "";
}
