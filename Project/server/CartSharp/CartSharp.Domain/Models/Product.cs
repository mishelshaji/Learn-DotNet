using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CartSharp.Domain.Models
{
    [Index(nameof(Name), IsUnique = true)]
    public class Product
    {
        public int Id { get; set; }

        [StringLength(70)]
        public string Name { get; set; }

        [StringLength(250)]
        public string MetaDescription { get; set; }

        [StringLength(2500)]
        public string Description { get; set; }

        [Range(0, 1_00_000)]
        [Column(TypeName = "decimal(6,2)")]
        public decimal Price { get; set; }

        [Range(0, 1000)]
        public int Stock { get; set; }

        [StringLength(250)]
        public string? Image { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
