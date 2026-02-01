import { useState, useEffect } from 'react';
import { menuApi } from '../services/api';

function Menu() {
  const [menuItems, setMenuItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [error, setError] = useState(null);

  const categories = [
    'ALL',
    'SUSHI',
    'DIM SUM',
    'RAMEN',
    'APPETIZERS',
    'MAIN COURSE',
    'DESSERTS',
    'BEVERAGES'
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await menuApi.getByCategories();
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setError('Failed to load menu. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const getFilteredItems = () => {
    if (activeCategory === 'ALL') {
      return Object.values(menuItems).flat();
    }
    return menuItems[activeCategory] || [];
  };

  if (loading) {
    return (
      <div className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="spinner-wrapper" style={{ minHeight: '400px' }}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Menu Hero */}
      <section 
        className="section section-dark" 
        style={{ 
          paddingTop: '150px',
          background: 'linear-gradient(rgba(26, 26, 46, 0.9), rgba(26, 26, 46, 0.95)), url("https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920") center/cover'
        }}
      >
        <div className="container text-center">
          <h1 className="mb-3">Our Menu</h1>
          <p style={{ color: 'var(--secondary-color)', fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.2rem' }}>
            Discover our authentic Asian flavors
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {error ? (
            <div className="alert alert-danger text-center">{error}</div>
          ) : (
            <div className="row g-4">
              {getFilteredItems().map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <div className="menu-card card h-100">
                    <img 
                      src={item.imageUrl} 
                      className="card-img-top" 
                      alt={item.name}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title mb-0">{item.name}</h5>
                        {item.vegetarian && <span className="badge-veg">VEG</span>}
                      </div>
                      <p className="card-text text-muted small flex-grow-1">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <p className="price mb-0">₹{item.price}</p>
                        <span className="text-muted small">
                          {item.category.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {getFilteredItems().length === 0 && !error && (
            <div className="text-center py-5">
              <p className="text-muted">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Vegetarian Note */}
      <section className="section section-dark">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="mb-3">Dietary Information</h3>
              <p className="opacity-75">
                Items marked with <span className="badge-veg mx-1">VEG</span> are vegetarian. 
                Please inform our staff about any allergies or dietary restrictions when ordering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
