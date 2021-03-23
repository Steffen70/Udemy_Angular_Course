using System.ComponentModel.DataAnnotations;

namespace API.Helpers
{
    public class UserParams
    {
        private const int MaxPageSize = 50;
        public int CurrentPage { get; set; } = 1;

        private int _itemsPerPage = 10;
        private int? _maxAge;

        public int ItemsPerPage
        {
            get => _itemsPerPage;
            set => _itemsPerPage = value > MaxPageSize ? MaxPageSize : value;
        }
        public string CurrentUsername { get; set; }
        [RegularExpression("(male)|(female)", ErrorMessage = "The Gender must be either 'male' or 'female' only.")]
        public string Gender { get; set; }
        [Range(18, int.MaxValue, ErrorMessage = "No members are younger than 18")]
        public int MinAge { get; set; } = 18;
        public int? MaxAge
        {
            get => _maxAge;
            set => _maxAge = value < MinAge ? MinAge : value;
        }
    }
}