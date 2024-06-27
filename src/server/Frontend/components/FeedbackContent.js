import React, { useState } from 'react';
import '../Styles/Feedback.css'; // Import the CSS file

function FeedbackContent() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const feedback = { name, message };

    try {
      const response = await fetch('http://localhost:8081/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setName('');
        setMessage('');
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Feedbacks</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              className="form-input"
              value={name} 
              placeholder='Enter your name'
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              placeholder='Enter your message'
              className="form-textarea"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackContent;

