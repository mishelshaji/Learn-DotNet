using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CartSharp.WebApp.Areas.Admin.Controllers
{
    public class CategoriesController : AdminControllerBase
    {
        private readonly CategoryService _service;
                                    
        public CategoriesController(CategoryService service)
        {
            _service = service;
        }

        [HttpGet]
        [ProducesResponseType(typeof(CategoryViewDto[]), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            var result = await _service.GetAllAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(CategoryViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetOne(int id)
        {
            var result = await _service.GetByIdAsync(id);
            return result == null ? NotFound() : Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CategoryViewDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> Post(CategoryCreateDto dto)
        {
            var result = await _service.CreateAsync(dto);
            return Ok(result);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(CategoryViewDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Put(int id, CategoryCreateDto dto)
        {
            var result = await _service.UpdateAsync(id, dto);
            
            if (result == null)
                return NotFound();

            if (!result.IsValid)
                return BadRequest(result.Errors);

            return Ok(result.Result);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var result = await _service.DeleteAsync(id);
            return result == null ? NotFound() : Ok();
        }
    }
}
