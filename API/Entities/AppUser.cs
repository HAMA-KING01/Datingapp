namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public String DisplayNmae { get; set; }
    public String Email { get; set; }
}
