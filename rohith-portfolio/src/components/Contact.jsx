import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Get this from Account > API Keys
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'service_bh23suj',
        'template_hvcnexm', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ggrohith210@gmail.com',
          reply_to: formData.email,
        }
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className={`contact-container ${inView ? 'animate' : ''}`}>
        <h1 className="contact-title">[CONTACT::INIT]</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="YOUR_NAME"
              required
              disabled={status.submitting}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="YOUR_EMAIL"
              required
              disabled={status.submitting}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              required
              disabled={status.submitting}
            />
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={status.submitting}
          >
            {status.submitting ? 'SENDING...' : 'TRANSMIT'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 