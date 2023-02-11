using CartSharp.Domain.Types;
using CartSharp.Service.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CartSharp.Service.Services
{
    public class ProductService
    {
        private readonly ApplicationDbContext _db;

        public ProductService(ApplicationDbContext db)
        {
            _db = db;
        }

        private void Validate(ProductCreateDto dto, ServiceResponse<ProductViewDto> result)
        {
            if (dto.Stock < 0)
                result.AddError("Stock", "Invalid value for stock.");
        }
        
        public async Task<ServiceResponse<ProductViewDto[]>> GetAllAsync()
        {
            var products = await _db.Products
                .Include(m => m.Category)
                .Select(p => new ProductViewDto
                {
                    Id = p.Id,
                    Description = p.Description,
                    Name = p.Name,
                    MetaDescription = p.MetaDescription,
                    Price = p.Price,
                    Stock = p.Stock,
                    Category = new()
                    {
                        Id = p.Category.Id,
                        Name = p.Category.Name,
                        Description = p.Category.Description
                    }
                }).ToArrayAsync();

            return new()
            {
                Result = products
            };
        }

        public async Task<ServiceResponse<ProductViewDto>?> GetByIdAsync(int id)
        {
            var product = await _db.Products
                .Include(m=>m.Category).FirstOrDefaultAsync(m=>m.Id == id);

            if (product is null)
                return null;

            ServiceResponse<ProductViewDto> serviceResponse = new()
            {
                Result = new()
                {
                    Id = product.Id,
                    Description = product.Description,
                    Name = product.Name,
                    MetaDescription = product.MetaDescription,
                    Price = product.Price,
                    Stock = product.Stock,
                    Category = new()
                    {
                        Id = product.Category.Id,
                        Name = product.Category.Name,
                        Description = product.Category.Description
                    }
                }
            };
            return serviceResponse;
        }

        public async Task<ServiceResponse<ProductViewDto>> CreateAsync(ProductCreateDto dto)
        {
            var result = new ServiceResponse<ProductViewDto>();

            Validate(dto, result);

            // Basic validations
            if (!await _db.Categories.AnyAsync(m => m.Id == dto.CategoryId))
                result.AddError(nameof(dto.CategoryId), "Invalid category");

            if (await _db.Products.AnyAsync(m => m.Name == dto.Name))
                result.AddError(nameof(dto.Name), "A similar product already exists.");

            if (!result.IsValid)
                return result;

            var product = new Product()
            {
                Name = dto.Name,
                CategoryId = dto.CategoryId,
                Description = dto.Description,
                MetaDescription = dto.MetaDescription,
                Price = dto.Price,
                Stock = dto.Stock
            };
            _db.Products.Add(product);
            //await _db.SaveChangesAsync();

            result.Result = new()
            {
                Id = product.Id,
                Description = product.Description,
                Name = product.Name,
                MetaDescription = product.MetaDescription,
                Price = product.Price,
                Stock = product.Stock,
                Category = null
            };
            return result;
        }
    }
}
