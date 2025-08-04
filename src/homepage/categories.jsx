const categories = ['South Indian', 'Italian', 'North Indian', 'Fast Food', 'Desserts', 'Asian Fusion'];

const Categories = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-16 px-6">
    {categories.map((cat) => (
      <p key={cat} className="p-4 bg-white rounded-lg shadow text-center hover:bg-gray-100 transition">
        {cat}
      </p>
    ))}
  </div>
);

export default Categories;
