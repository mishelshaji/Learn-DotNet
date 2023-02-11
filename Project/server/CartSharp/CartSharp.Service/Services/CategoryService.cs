using CartSharp.Domain.Models;
using CartSharp.Domain.Types;
using CartSharp.Service.Data;
using CartSharp.Service.Dto;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CartSharp.Service.Services
{
    public class CategoryService
    {
        private readonly ApplicationDbContext _db;

        public CategoryService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<List<CategoryViewDto>> GetAllAsync()
        {
            return await _db.Categories
                .Select(c => new CategoryViewDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Description = c.Description
                })
                .ToListAsync();
            //return _db.Categories.Select(c => new CategoryViewDto(c)).ToList();
        }

        public async Task<CategoryViewDto?> GetByIdAsync(int id)
        {
            Category? category = await _db.Categories.FindAsync(id);
            return category == null ? null : new CategoryViewDto
            {
                Id = category.Id,
                Name = category.Name,
                Description = category.Description
            };
        }

        public async Task<CategoryViewDto> CreateAsync(CategoryCreateDto dto)
        {
            var category = new Category
            {
                Name = dto.Name,
                Description = dto.Description
            };

            _db.Categories.Add(category);
            await _db.SaveChangesAsync();

            return new CategoryViewDto
            {
                Id = category.Id,
                Name = category.Name,
                Description = category.Description
            };
        }

        public async Task<ServiceResponse<CategoryViewDto>?> UpdateAsync(int id, CategoryCreateDto dto)
        {
            var response = new ServiceResponse<CategoryViewDto>();

            // Check if the category exists.
            var category = await _db.Categories.FindAsync(id);
            if (category == null)
                return null;

            // Check if any other category has the same name.
            if(await _db.Categories.AnyAsync(m=>m.Name == dto.Name))
            {
                response.AddError("Name", "A category with the same name already exists.");
            }

            if (!response.IsValid)
                return response;

            category.Name = dto.Name;
            category.Description = dto.Description;
            await _db.SaveChangesAsync();

            response.Result = new CategoryViewDto
            {
                Id = category.Id,
                Name = category.Name,
                Description = category.Description
            };
            return response;
        }

        public async Task<ServiceResponse<bool>?> DeleteAsync(int id)
        {
            var category = await _db.Categories.FindAsync(id);
            if (category == null)
                return null;

            _db.Categories.Remove(category);
            await _db.SaveChangesAsync();
            return new ServiceResponse<bool>
            {
                Result = true
            };
        }
    }
}
