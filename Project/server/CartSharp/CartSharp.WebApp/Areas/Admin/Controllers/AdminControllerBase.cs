using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CartSharp.WebApp.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("api/[area]/[controller]")]
    [ApiController]
    public class AdminControllerBase : ControllerBase
    {
    }
}
