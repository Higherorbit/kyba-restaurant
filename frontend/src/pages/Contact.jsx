import { useState } from 'react';
import { contactApi } from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlert(null);

    try {
      const response = await contactApi.submit(formData);
      setAlert({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setAlert({ 
        type: 'danger', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contact Hero */}
      <section 
        className="section section-dark" 
        style={{ 
          paddingTop: '150px',
          background: 'linear-gradient(rgba(26, 26, 46, 0.9), rgba(26, 26, 46, 0.95)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920") center/cover'
        }}
      >
        <div className="container text-center">
          <h1 className="mb-3">Contact Us</h1>
          <p style={{ color: 'var(--secondary-color)', fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.2rem' }}>
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="row g-0">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="contact-info h-100">
                <h3>Get in Touch</h3>
                
                <div className="mb-4">
                  <h5 style={{ color: 'var(--secondary-color)', fontSize: '1rem' }}>Location</h5>
                  <p className="mb-1">Kyba Restaurant</p>
                  <p className="mb-1">Kasavanahalli Main Road</p>
                  <p className="mb-1">Sarjapur, Bangalore</p>
                  <p>Karnataka 560035</p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: 'var(--secondary-color)', fontSize: '1rem' }}>Phone</h5>
                  <p className="mb-1">+91 98765 43210</p>
                  <p>+91 80 1234 5678</p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: 'var(--secondary-color)', fontSize: '1rem' }}>Email</h5>
                  <p className="mb-1">info@kyba.in</p>
                  <p>reservations@kyba.in</p>
                </div>

                <div className="mb-4">
                  <h5 style={{ color: 'var(--secondary-color)', fontSize: '1rem' }}>Opening Hours</h5>
                  <p className="mb-1">Monday - Thursday: 12PM - 10PM</p>
                  <p className="mb-1">Friday - Saturday: 12PM - 11PM</p>
                  <p>Sunday: 12PM - 9PM</p>
                </div>

                <div>
                  <h5 style={{ color: 'var(--secondary-color)', fontSize: '1rem' }}>Follow Us</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                      Instagram
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="p-4 p-lg-5 bg-light h-100">
                <h3 className="mb-4">Send us a Message</h3>

                {alert && (
                  <div className={`alert alert-${alert.type} alert-custom`} role="alert">
                    {alert.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Your Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        minLength="10"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="btn btn-primary-custom"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ padding: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0088839261973!2d77.67468!3d12.9065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b8d5c30001%3A0x9a5b1c7c8f5b5c5!2sKasavanahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kyba Location"
        ></iframe>
      </section>
    </>
  );
}

export default Contact;
