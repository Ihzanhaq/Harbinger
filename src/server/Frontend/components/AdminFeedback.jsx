import React, { useEffect, useState } from 'react';
import '../Styles/Admin.css'; // Import the CSS file

function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:8081/feedback');
        const data = await response.json();
        if (response.ok) {
          setFeedbacks(data);
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError('An error occurred while fetching feedbacks. Please try again later.');
      }
    };

    fetchFeedbacks();
  }, []);

  const deleteFeedback = async (id) => {
    try {
      const response = await fetch(`http://localhost:8081/feedback/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id));
      } else {
        const data = await response.json();
        setError(data.error || 'An error occurred while deleting the feedback.');
      }
    } catch (error) {
      setError('An error occurred while deleting the feedback. Please try again later.');
    }
  };

  return (
    <div className='container-padding'>
      <div className="admin-feedback-container">
        <h1 className="admin-feedback-title pt-5 mt-4">Customer Feedbacks</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="feedback-list">
          {feedbacks.map(feedback => (
            <div key={feedback.id} className="feedback-item">
              <button 
                className="delete-button" 
                onClick={() => deleteFeedback(feedback.id)}
              >
                &times;
              </button>
              <h2 className="feedback-name">Name: {feedback.name}</h2>
              <p className="feedback-message">
                <span>Message:</span><br />
                {feedback.message}
              </p>
              <p className="feedback-date">{new Date(feedback.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminFeedback;
