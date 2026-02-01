import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { menuApi } from '../services/api';

function Home() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await menuApi.getAllItems();
        // Get 6 random items for featured
        const shuffled = response.data.sort(() => 0.5 - Math.random());
        setFeaturedItems(shuffled.slice(0, 6));
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="tagline">Welcome to</p>
          <h1>KYBA</h1>
          <p>Premium Sushi, Dim Sums & Asian Cuisine</p>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Kasavanahalli, Bangalore</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/menu" className="btn btn-primary-custom">
              View Menu
            </Link>
            <Link to="/reservation" className="btn btn-outline-custom">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600" 
                  alt="Kyba Restaurant Interior"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <p className="text-uppercase" style={{ color: 'var(--secondary-color)', letterSpacing: '2px' }}>
                  Our Story
                </p>
                <h2 className="mb-4">A Journey Through Asian Flavors</h2>
                <p className="mb-4">
                  Nestled in the vibrant neighborhood of Kasavanahalli, Kyba brings you an 
                  authentic Asian dining experience. Our chefs craft each dish with passion, 
                  using the freshest ingredients and time-honored techniques.
                </p>
                <p className="mb-4">
                  From delicate sushi rolls to steaming dim sums, every bite tells a story 
                  of tradition and innovation. Whether you're here for a quick lunch or a 
                  special celebration, we promise an unforgettable culinary journey.
                </p>
                <Link to="/contact" className="btn btn-primary-custom">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Kyba</h2>
            <p>Experience the difference</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">🍣</div>
                <h4>Fresh Ingredients</h4>
                <p>We source the finest and freshest ingredients daily to ensure exceptional quality in every dish.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">👨‍🍳</div>
                <h4>Expert Chefs</h4>
                <p>Our skilled chefs bring years of experience and passion for Asian cuisine to your table.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <div className="feature-icon">🏮</div>
                <h4>Cozy Ambiance</h4>
                <p>Enjoy your meal in our beautifully designed space that blends modern comfort with Asian aesthetics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Dishes</h2>
            <p>Chef's recommendations</p>
          </div>
          
          {loading ? (
            <div className="spinner-wrapper">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {featuredItems.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <div className="menu-card card h-100">
                    <img src={item.imageUrl} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title mb-0">{item.name}</h5>
                        {item.vegetarian && <span className="badge-veg">VEG</span>}
                      </div>
                      <p className="card-text text-muted small">{item.description}</p>
                      <p className="price mb-0">₹{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-5">
            <Link to="/menu" className="btn btn-primary-custom">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation-section section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Reserve Your Table</h2>
              <p className="mb-4 opacity-75">
                Join us for an unforgettable dining experience. Book your table now and 
                let us take care of the rest.
              </p>
              <Link to="/reservation" className="btn btn-primary-custom btn-lg">
                Make a Reservation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>A glimpse of Kyba</p>
          </div>
          <div className="row g-3">
            {[
              'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400',
              'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400',
              'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
            ].map((url, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="gallery-item">
                  <img src={url} alt={`Gallery ${index + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
