import React, { useState } from 'react';
import './BookingForm.css'

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save name and email to local storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='booking-form'>
            <h2>Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit" className='submit-btn'>Submit</button>
            </form>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Booking Confirmation</h3>
                        <p>Your booking has been confirmed.</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingForm;
