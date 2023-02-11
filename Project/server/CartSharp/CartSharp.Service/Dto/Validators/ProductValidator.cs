using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CartSharp.Service.Dto.Validators
{
    internal class ProductValidator: AbstractValidator<ProductCreateDto>
    {
        public ProductValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Name is required")
                .Length(1, 50).WithMessage("Name must be between 1 and 50 characters")
                .Matches(@"^[a-zA-Z0-9\s]*$").WithMessage("Name must be alphanumeric")
                .Must(n => char.IsUpper(n[0])).WithMessage("Name must start with an uppercase letter");

            RuleFor(m => m.MetaDescription).NotEmpty().WithMessage("Meta Description is required")
                .Length(1, 250).WithMessage("Meta Description must be between 1 and 250 characters");

            RuleFor(m => m.Description).NotEmpty().WithMessage("Description is required");

            RuleFor(m => m.Price).NotEmpty().WithMessage("Price is required")
                .LessThan(0).WithMessage("Price must be greater than 0");

            RuleFor(m => m.Stock).NotEmpty().WithMessage("Stock is required")
                .LessThan(0).WithMessage("Stock must be greater than 0")
                .GreaterThan(1000).WithMessage("Stock must be less than 1000");

            RuleFor(m => m.CategoryId).NotEmpty().WithMessage("Category is required");
        }
    }
}
