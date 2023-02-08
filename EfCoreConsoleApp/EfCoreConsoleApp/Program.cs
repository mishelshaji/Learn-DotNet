var db = new ApplicationDbContext();

db.Remove(new Category { Id = 1 });
db.SaveChanges();