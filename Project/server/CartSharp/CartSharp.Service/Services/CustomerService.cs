using CartSharp.Domain.Models;
using CartSharp.Domain.Types;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CartSharp.Service.Services
{
    public class AccountsService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountsService(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task<ServiceResponse<bool>> CreateCustomerAsync(CustomerCreateDto dto)
        {
            var response = new ServiceResponse<bool>();

            var user = new ApplicationUser
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                UserName = Guid.NewGuid().ToString()
            };

            // Create the user and add to role.
            var userStatus = await _userManager.CreateAsync(user, dto.Password);
            if (!userStatus.Succeeded)
            {
                response.AddError("", "Failed to create user");
                return response;
            }

            await _userManager.AddToRoleAsync(user, "Customer");

            response.Result = true;
            return response;
        }

    }
}
