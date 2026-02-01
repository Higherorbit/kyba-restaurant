import { useState } from 'react';
import { reservationApi } from '../services/api';

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
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
      const response = await reservationApi.create(formData);
      setAlert({ type: 'success', message: response.data.message });
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: 2,
        specialRequests: ''
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
        error.response?.data?.errors?.join(', ') ||
        'Failed to make reservation. Please try again.';
      setAlert({ type: 'danger', message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  // Get tomorrow's date for min date
  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Get max date (3 months from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  return (
    <>
      {/* Reservation Hero */}
      <section 
        className="section section-dark" 
        style={{ 
          paddingTop: '150px',
          background: 'linear-gradient(rgba(26, 26, 46, 0.9), rgba(26, 26, 46, 0.95)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920") center/cover'
        }}
      >
        <div className="container text-center">
          <h1 className="mb-3">Reserve a Table</h1>
          <p style={{ color: 'var(--secondary-color)', fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.2rem' }}>
            Book your dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="reservation-form">
                <h3 className="text-center mb-4">Make a Reservation</h3>
                <p className="text-center text-muted mb-4">
                  Fill out the form below to reserve your table. We'll confirm your booking via phone or email.
                </p>

                {alert && (
                  <div className={`alert alert-${alert.type} alert-custom`} role="alert">
                    {alert.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength="2"
                        maxLength="100"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        placeholder="9876543210"
                      />
                      <small className="text-muted">10 digit number without spaces</small>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email (Optional)</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Number of Guests *</label>
                      <select
                        className="form-control"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Date *</label>
                      <input
                        type="date"
                        className="form-control"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={getTomorrow()}
                        max={getMaxDate()}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Preferred Time *</label>
                      <select
                        className="form-control"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a time</option>
                        <optgroup label="Lunch">
                          {timeSlots.slice(0, 6).map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Dinner">
                          {timeSlots.slice(6).map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Special Requests (Optional)</label>
                      <textarea
                        className="form-control"
                        name="specialRequests"
                        rows="3"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Any special requests, dietary requirements, or occasion details..."
                      ></textarea>
                    </div>

                    <div className="col-12 text-center mt-4">
                      <button 
                        type="submit" 
                        className="btn btn-primary-custom btn-lg"
                        disabled={loading}
                      >
                        {loading ? 'Booking...' : 'Confirm Reservation'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <h4 style={{ color: 'var(--secondary-color)' }}>Reservation Policy</h4>
              <p className="opacity-75">
                Please arrive within 15 minutes of your reservation time. 
                Tables may be released after 20 minutes for walk-in guests.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h4 style={{ color: 'var(--secondary-color)' }}>Large Groups</h4>
              <p className="opacity-75">
                For parties of 10 or more, please call us directly at 
                +91 98765 43210 to arrange your reservation.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <h4 style={{ color: 'var(--secondary-color)' }}>Cancellation</h4>
              <p className="opacity-75">
                We kindly request 24 hours notice for cancellations. 
                Please call or email us to modify your booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reservation;
