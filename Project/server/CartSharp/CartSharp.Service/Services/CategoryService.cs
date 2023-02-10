using CartSharp.Domain.Models;
using CartSharp.Service.Data;
using CartSharp.Service.Dto;
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

        public List<CategoryViewDto> GetAll()
        {
            return _db.Categories
                .Select(c => new CategoryViewDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Description = c.Description
                })
                .ToList();
            //return _db.Categories.Select(c => new CategoryViewDto(c)).ToList();
        }

        public CategoryViewDto? GetById(int id)
        {
            Category? category = _db.Categories.Find(id);
            return category == null ? null : new CategoryViewDto
            {
                Id = category.Id,
                Name = category.Name,
                Description = category.Description
            };
        }
    }
}
