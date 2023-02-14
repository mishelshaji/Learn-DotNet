using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CartSharp.WebApp.Areas.User.Controllers
{
    [Area("User")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserControllerBase : ControllerBase
    {
    }
}
