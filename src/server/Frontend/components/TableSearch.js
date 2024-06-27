import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../Styles/Reservation.css';
import SelectDatePicker from '../components/datePicker';
import TimePicker from '../components/Timepicker';

function TableSearch({ setStep, setFormattedDate, selectedTime, setSelectedTime, setPeople, setStatus, formattedDate, people,availableTables,setAvailableTables }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAvailability();
  }, []);

  const fetchAvailability = () => {
    axios.get('http://localhost:8081/reservations/count')
      .then((response) => {
        const { availableTables } = response.data;
        setAvailableTables(availableTables);
      })
      .catch((error) => {
        console.error('Error fetching table availability:', error);
        setAvailableTables(0);
      });
  };
  const [check,setCheck]=useState(2);
  const handleChange = (event) => {
    const selectedPeople = Number(event.target.value);
    setCheck(selectedPeople)
    setPeople(selectedPeople);
  };

  const nextStep = () => {
    console.log(selectedTime); 
    if (check <= availableTables) {
       
      setStep('Details');
      setMessage('');
    } else {
      setStatus({ type: 'error', message: 'Sorry, no tables available for the selected number of people.' });
      setMessage('Sorry, no tables available for the selected number of people.');
    }
  };

  return (
        <div>
            <Form style={{ border: '1px solid black', padding: '60px', borderRadius: '10px' }}>
                <br />
                <Row className='res-row'>
                    <Col className='Reserve-cols'>
                        <label className='pb-3 px-2'>Number of People (required):</label>
                        <select id="people-select" className='Num-Input' onChange={handleChange}>
                            {Array.from({ length: 39 }, (_, i) => i + 2).map((number) => (
                                <option key={number} value={number}>
                                    {number} People
                                </option>
                            ))}
                        </select>
                    </Col>
                    <Col className='Reserve-cols'>
                        <label className='pb-3 px-2'>Select Date (required):</label>
                        <SelectDatePicker setFormattedDate={setFormattedDate} />
                    </Col>
                    <Col className='Reserve-cols'>
                        <label className='pb-3 px-2'>Select Time (required):</label>
                        <TimePicker
                            selectedTime={selectedTime}
                            setSelectedTime={setSelectedTime}
                            formattedDate={formattedDate}
                        />
                    </Col>
                </Row>
                <Row className='res-row'>
                    <div className='pt-5'>
                        <Button onClick={nextStep} type="button" className="find-table-button" variant="dark">Next</Button>
                    </div>
                </Row>
                {message && (
                    <Row className='res-row'>
                        <div className="text-center mt-3">
                            {message}
                        </div>
                    </Row>
                )}
                {availableTables !== undefined && (
                    <Row className='res-row'>
                        <div className="text-center mt-3">
                            {availableTables === 0
                                ? 'Sorry, no tables available at the moment.'
                                : `Tables available for: ${availableTables} people`
                            }
                        </div>
                    </Row>
                )}
            </Form>
        </div>
    );
}

export default TableSearch;
