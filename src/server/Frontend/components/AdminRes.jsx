import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Admin.css';

const Reservations = () => {
    const [acceptedReservations, setAcceptedReservations] = useState([]);
    const [pendingReservations, setPendingReservations] = useState([]);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://localhost:8081/data');
            const accepted = response.data.filter(res => res.status === 'accepted');
            const pending = response.data.filter(res => res.status === 'pending' || res.status === 'declined');
            setAcceptedReservations(accepted);
            setPendingReservations(pending);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    const handleAccept = async (id) => {
        try {
            const response = await axios.put(`http://localhost:8081/data/${id}`, { status: 'accepted' });
            console.log('Accept response:', response.data);

            setPendingReservations(prevState => prevState.filter(res => res.id !== id));
            const acceptedReservation = pendingReservations.find(res => res.id === id);
            setAcceptedReservations(prevState => [...prevState, { ...acceptedReservation, status: 'accepted' }]);
        } catch (error) {
            console.error('Error accepting reservation:', error);
        }
    };

    const handleDecline = async (id) => {
        try {
            const response = await axios.put(`http://localhost:8081/data/${id}`, { status: 'declined' });
            console.log('Decline response:', response.data);

            // Fetch updated reservations from the backend
            await fetchReservations();
        } catch (error) {
            console.error('Error declining reservation:', error);
        }
    };

    const handleRemove = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/data/${id}`);
            console.log('Remove response:', response.data);

            setAcceptedReservations(prevState => prevState.filter(res => res.id !== id));
            setPendingReservations(prevState => prevState.filter(res => res.id !== id));
        } catch (error) {
            console.error('Error removing reservation:', error);
        }
    };

    return (
        <div className="container">
            <div className="box">
                <h2 className="reservation-heading">Accepted Reservations</h2>
                <table className="reservation-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Number of People</th>
                            <th>Request</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {acceptedReservations.map((res) => (
                            <tr key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.date}</td>
                                <td>{res.time}</td>
                                <td>{res.num}</td>
                                <td>{res.request}</td>
                                <td>Accepted</td>
                                <td>
                                    <button className="button remove" onClick={() => handleRemove(res.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="box">
                <h2 className="reservation-heading">Pending Reservations</h2>
                <table className="reservation-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Number of People</th>
                            <th>Request</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingReservations.map((res) => (
                            <tr key={res.id}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.date}</td>
                                <td>{res.time}</td>
                                <td>{res.num}</td>
                                <td>{res.request}</td>
                                <td>{res.status}</td>
                                <td>
                                    {res.status === 'pending' && (
                                        <>
                                            <button className="button accept" onClick={() => handleAccept(res.id)}>Accept</button>
                                            <button className="button decline" onClick={() => handleDecline(res.id)}>Decline</button>
                                        </>
                                    )}
                                    {res.status === 'declined' && (
                                        <button className="button remove" onClick={() => handleRemove(res.id)}>Remove</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reservations;
