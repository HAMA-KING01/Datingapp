namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required String DisplayNmae { get; set; }
    public required String Email { get; set; }
    public required byte[] passwordHash { get; set; }
    public required byte[] passwordSalt { get; set; }
}
