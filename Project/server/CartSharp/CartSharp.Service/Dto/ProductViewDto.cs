using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CartSharp.Service.Dto
{
    public class ProductViewDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string MetaDescription { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public int Stock { get; set; }

        public CategoryViewDto Category { get; set; }
    }

    public static class ApplicationUserViewDtoMapper
    {
        public static Product Map(ProductViewDto source)
        {
            return new Product
            {
                Id = source.Id,
                Name = source.Name,
                MetaDescription = source.MetaDescription,
                Description = source.Description,
                Price = source.Price,
                Stock = source.Stock,
                CategoryId = source.Category.Id,
                Category = new Category
                {
                    Id = source.Category.Id,
                    Name = source.Category.Name,
                    Description = source.Category.Description
                }
            };
        }

        public static ProductViewDto Map(Product source)
        {
            return new ProductViewDto
            {
                Id = source.Id,
                Name = source.Name,
                MetaDescription = source.MetaDescription,
                Description = source.Description,
                Price = source.Price,
                Stock = source.Stock,
                Category = new CategoryViewDto(source.Category)
                // TODO: ??? = source.CategoryId
            };
        }
    }
}
