namespace API.Helpers
{
    public class UserHeader : PaginationHeader
    {
        public string Gender { get; set; }
        public int MinAge { get; set; }
        public int? MaxAge { get; set; }
    }
}