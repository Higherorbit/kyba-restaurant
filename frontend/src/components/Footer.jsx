import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5>KYBA</h5>
            <p className="mb-3">
              Experience the finest Asian cuisine in the heart of Kasavanahalli. 
              Where tradition meets contemporary flavors.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                Facebook
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/menu">Menu</Link></li>
              <li className="mb-2"><Link to="/contact">Contact</Link></li>
              <li className="mb-2"><Link to="/reservation">Reservations</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Opening Hours</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Monday - Thursday: 12PM - 10PM</li>
              <li className="mb-2">Friday - Saturday: 12PM - 11PM</li>
              <li className="mb-2">Sunday: 12PM - 9PM</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                Kasavanahalli, Bangalore
              </li>
              <li className="mb-2">
                Karnataka 560035
              </li>
              <li className="mb-2">
                +91 98765 43210
              </li>
              <li className="mb-2">
                info@kyba.in
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kyba Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
