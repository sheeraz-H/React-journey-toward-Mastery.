import React, { useState, useEffect, memo } from 'react';
import { FaSearch, FaFilter, FaStar, FaShoppingCart, FaEye, FaChevronLeft, FaChevronRight, FaHeart, FaSortAmountDown } from 'react-icons/fa';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return [isDark, setIsDark];
};

const mockProducts = [
  { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, rating: 4.5, image: '/images/product1.jpg', desc: 'High-quality sound with noise cancellation.' },
  { id: 2, name: 'Casual T-Shirt', category: 'Clothing', price: 29.99, rating: 4.0, image: '/images/product2.jpg', desc: 'Comfortable cotton fabric for everyday wear.' },
  { id: 3, name: 'Smart Home Hub', category: 'Electronics', price: 149.99, rating: 4.7, image: '/images/product3.jpg', desc: 'Control your home devices effortlessly.' },
  { id: 4, name: 'Running Shoes', category: 'Clothing', price: 79.99, rating: 4.3, image: '/images/product4.jpg', desc: 'Lightweight and durable for all terrains.' },
  { id: 5, name: 'Coffee Maker', category: 'Home', price: 59.99, rating: 4.2, image: '/images/product5.jpg', desc: 'Brew perfect coffee every morning.' },
  { id: 6, name: 'Bluetooth Speaker', category: 'Electronics', price: 49.99, rating: 4.1, image: '/images/product6.jpg', desc: 'Portable sound with deep bass.' },
  { id: 7, name: 'Yoga Mat', category: 'Home', price: 39.99, rating: 4.4, image: '/images/product7.jpg', desc: 'Non-slip surface for your workouts.' },
  { id: 8, name: 'Leather Wallet', category: 'Clothing', price: 24.99, rating: 3.9, image: '/images/product8.jpg', desc: 'Stylish and functional accessory.' },
];
const categories = ['All', 'Electronics', 'Clothing', 'Home'];

const Products = memo(() => {
  const [isDark] = useDarkMode();
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const productsPerPage = 9;

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === 'All' || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );
    if (sortBy === 'price') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else filtered.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, priceRange, sortBy, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const openQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);
  const toggleWishlist = (id) => setWishlist((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Explore Our Products</h1>
          <p className="text-xl mb-10">Find the perfect items tailored to your needs.</p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white text-gray-900 w-80 text-lg"
              aria-label="Search products"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors">
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        <aside className="lg:w-1/4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <FaFilter className="mr-3 text-orange-500" />
            Filters
          </h2>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-lg"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="200"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-lg"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </aside>

        <main className="lg:w-3/4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
            <div className="flex overflow-x-auto space-x-6 pb-6">
              {mockProducts.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="min-w-[280px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" onError={(e) => (e.target.src = '/images/fallback.jpg')} />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">${product.price}</p>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative"
              >
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors`}
                  aria-label="Add to wishlist"
                >
                  <FaHeart size={20} />
                </button>
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg mb-4" onError={(e) => (e.target.src = '/images/fallback.jpg')} />
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{product.desc}</p>
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-500 mr-2" />
                  <span className="text-lg">{product.rating}</span>
                </div>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-6">${product.price}</p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => openQuickView(product)}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                    aria-label={`Quick view ${product.name}`}
                  >
                    <FaEye className="mr-2" />
                    Quick View
                  </button>
                  <button
                    className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-5 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous page"
              >
                <FaChevronLeft />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-5 py-3 rounded-lg transition-colors ${currentPage === i + 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-5 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next page"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </main>
      </div>

      {quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeQuickView}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-lg w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-64 object-cover rounded-lg mb-6" onError={(e) => (e.target.src = '/images/fallback.jpg')} />
            <h3 className="text-2xl font-semibold mb-4">{quickViewProduct.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{quickViewProduct.desc}</p>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="text-lg">{quickViewProduct.rating}</span>
            </div>
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6">${quickViewProduct.price}</p>
            <div className="flex space-x-4">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
              <button onClick={closeQuickView} className="flex-1 bg-gray-200 dark:bg-gray-700 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center mt-12">
        <h2 className="text-4xl font-bold mb-6">Custom Solutions Available</h2>
        <p className="text-xl mb-10">Need something unique? Let's create it together.</p>
        <button className="bg-white text-orange-600 px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold">
          Contact Us
        </button>
      </section>
    </div>
  );
});

export default Products;
