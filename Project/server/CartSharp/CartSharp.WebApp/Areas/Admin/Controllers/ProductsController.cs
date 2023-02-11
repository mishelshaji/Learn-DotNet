using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CartSharp.WebApp.Areas.Admin.Controllers
{
    public class ProductsController : AdminControllerBase
    {
        private readonly ProductService _service;

        public ProductsController(ProductService service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(ProductViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAllAsync();
            return Ok(result.Result);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ProductViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetOne(int id)
        {
            var result = await _service.GetByIdAsync(id);
            if (result == null)
                return NotFound();

            return Ok(result.Result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(ProductViewDto), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Create(ProductCreateDto dto)
        {
            var result = await _service.CreateAsync(dto);
            if (!result.IsValid)
                return BadRequest(result.Errors);

            return CreatedAtAction(nameof(GetOne), new {id=result.Result.Id}, result.Result);
        }
    }
}
