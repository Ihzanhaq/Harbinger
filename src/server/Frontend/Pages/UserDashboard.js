import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/UserDashboard.css';

function UserDashboard({ username }) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (username) {
      console.log('Fetching reservations for user:', username);
      axios.get(`http://localhost:8081/data/${username}`)
        .then(response => {
          console.log('Reservations fetched:', response.data);
          setReservations(response.data);
        })
        .catch(error => {
          console.error('Error fetching reservations:', error);
        });
    }
  }, [username]);

  const handleRemove = (id) => {
    axios.delete(`http://localhost:8081/data/${id}`)
      .then(response => {
        console.log('Reservation removed:', response.data);
        setReservations(reservations.filter(reservation => reservation.id !== id));
      })
      .catch(error => {
        console.error('Error removing reservation:', error);
      });
  };

  return (
    <div className="user-dashboard">
      {reservations.length > 0 ? (
        <>
          <h1 className='text-center'>Your Reservations</h1>
          <div className="reservation-list">
            {reservations.map(reservation => (
              <div key={reservation.id} className="reservation-card">
                <button
                  className="remove-button"
                  onClick={() => handleRemove(reservation.id)}
                >
                  &times;
                </button>
                <div className="reservation-details">
                  <p><strong>Date:</strong> {reservation.date}</p>
                  <p><strong>Time:</strong> {reservation.time}</p>
                  <p><strong>People:</strong> {reservation.num}</p>
                  {reservation.status === 'accepted' && (
                    <p className="confirmed-badge">Confirmed</p>
                  )}
                  {reservation.status === 'pending' && (
                    <p className="pending-badge">Pending</p>
                  )}
                  {reservation.status === 'declined' && (
                    <p className="declined-badge">Declined</p>
                  )}
                </div>
                <div className="reservation-timestamp">
                  {new Date(reservation.date).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="no-reservations-message">You have no current reservations</p>
      )}
    </div>
  );
}

export default UserDashboard;
