using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace EfCoreConsoleApp.Models
{
    internal class Product
    {
        public int Id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        public int Price { get; set; }

        public int CategoryId { get; set; }
        [JsonIgnore]
        public Category Category { get; set; }
    }
}
