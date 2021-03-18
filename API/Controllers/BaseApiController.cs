using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        protected readonly DataContext _context;
        public BaseApiController(DataContext context)
        {
            _context = context;
        }
    }
}