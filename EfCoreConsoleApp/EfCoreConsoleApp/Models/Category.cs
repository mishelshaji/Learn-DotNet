using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfCoreConsoleApp.Models
{
    [Index(nameof(Name), IsUnique = true)]
    internal class Category
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(250)]
        public string? Description { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
}
