import React from 'react';
import '../Styles/Reservation.css';
import axios from 'axios';

function ResButtons({ step, setStep, setStatus }) {
  const buttonClick = async (e) => {
    const clickedStep = e.target.name;
    if (clickedStep === 'Table') {
      setStep(clickedStep);
    } else if (clickedStep === 'Details') {
      try {
        const response = await axios.get('http://localhost:8081/reservations/count');
        const { count } = response.data;
        if (count > 80) {
          setStatus({ type: 'error', message: 'Sorry, no tables available.' });
        } else {
          setStep(clickedStep);
        }
      } catch (err) {
        console.log("Error occurred:", err);
        setStatus({ type: 'error', message: 'An unexpected error occurred.' });
      }
    }
  };

  return (
    <div>
      <div className="res-btn-group pb-4">
        <button className={step === 'Table' ? 'res-button button-under' : 'res-button'} name="Table" onClick={buttonClick}>
          Find a table
        </button>
        <button
          className={step === 'Details' ? 'res-button button-under' : 'res-button'}
          name="Details"
          onClick={buttonClick}
          disabled={step === 'Table'}
        >
          Add your details
        </button>
      </div>
    </div>
  );
}

export default ResButtons;


