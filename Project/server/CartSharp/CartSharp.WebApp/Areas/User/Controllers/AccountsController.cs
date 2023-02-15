using Microsoft.AspNetCore.Mvc;

namespace CartSharp.WebApp.Areas.User.Controllers
{
    public class AccountsController: UserControllerBase
    {
        private readonly AccountsService _service;

        public AccountsController(AccountsService service)
        {
            _service = service;
        }

        [HttpPost("customer/register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PostCustomer(CustomerCreateDto dto)
        {
            var result = await _service.CreateCustomerAsync(dto);
            if (!result.IsValid)
            {
                return BadRequest(result.Errors);
            }

            return Ok();
        }

        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PostLogin(LoginDto dto)
        {
            var result = await _service.LoginAsync(dto);
            if (result.IsValid)
                return Ok(result);
            
            return BadRequest(result.Errors);
        }
    }
}
