import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResButtons from '../components/ResButtons';
import TableSearch from '../components/TableSearch';
import '../Styles/Reservation.css';
import TableDetails from '../components/TableDetails';
import TableSuccess from '../components/TableSuccess';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

function Reservation({ isLoggedIn, username }) {
  const [step, setStep] = useState('Table');
  const [formattedDate, setFormattedDate] = useState('08:00 AM');
  const [selectedTime, setSelectedTime] = useState('');
  const [people, setPeople] = useState(2);
  const [status, setStatus] = useState(undefined);
  const [name, setName] = useState(username || '');
  const [phone, setPhone] = useState('');
  const [req, setReq] = useState('');
  const [errors, setErrors] = useState({});
  const [tableAvailabilityMessage, setTableAvailabilityMessage] = useState('');
  const [availableTables, setAvailableTables] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetch table availability message
    axios.get('http://localhost:8081/reservations/count')
      .then((response) => {
        const { message } = response.data;
        setTableAvailabilityMessage(message);
      })
      .catch((error) => {
        console.error('Error fetching table availability:', error);
        setTableAvailabilityMessage('An unexpected error occurred.');
      });

    // Simulate loading delay for animation
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (phone.length !== 10) {
      validationErrors.phone = 'Phone number should have 10 digits';
    }
    if (!/^[0-9]+$/.test(phone)) {
      validationErrors.phone = 'Phone number should only have numbers';
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8081/react', {
        people,
        formattedDate: formattedDate,
        selectedTime,
        name,
        phone,
        req
      })
        .then(() => {
          setStatus({ type: 'success' });
          setStep('Success');
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.error === 'Duplicate entry') {
            setStatus({ type: 'error', message: 'Duplicate entry detected. Not registered.' });
          } else {
            setStatus({ type: 'error', message: 'An unexpected error occurred.' });
          }
        });
    }
  };

  return (
    <div className={`res-container ${loaded ? 'loaded' : ''}`}>
      <h1 className='pt-5 text-center Res-user-head'>Reservations</h1>
      <div className='d-flex justify-content-center align-items-center p-5'>
        <div className='Regborder p-3 rounded col-md-10'>
          {isLoggedIn ? (
            <>
              <ResButtons step={step} setStep={setStep} setStatus={setStatus} />
              <TransitionGroup>
                <CSSTransition
                  key={step}
                  timeout={500}
                  classNames="slide"
                >
                  <div>
                    {step === 'Success' ? (
                      <TableSuccess />
                    ) : (
                      <>
                        {step === 'Table' ? (
                          <TableSearch
                            setStep={setStep}
                            setFormattedDate={setFormattedDate}
                            selectedTime={selectedTime}
                            setPeople={setPeople}
                            setStatus={setStatus}
                            setSelectedTime={setSelectedTime}
                            formattedDate={formattedDate}
                            setAvailableTables={setAvailableTables}
                            availableTables={availableTables}
                          />
                        ) : step === 'Details' ? (
                          <TableDetails
                            handleSubmit={handleSubmit}
                            status={status}
                            name={name}
                            setName={setName}
                            phone={phone}
                            setPhone={setPhone}
                            req={req}
                            setReq={setReq}
                            errors={errors}
                            username={username} // Pass username as prop
                          />
                        ) : null}
                        {tableAvailabilityMessage && (
                          <div className="text-center mt-3 text-danger">
                            {tableAvailabilityMessage}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </>
          ) : (
            <div className="text-center login-prompt">
              <p>Please log in to make a reservation.</p>
              <Link to="/Login"><button type="button" className="login">Login</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reservation;
