import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowSummary.css'

const ShowSummary = ({ shows }) => {
    const { id } = useParams();

    // Find the show with the matching ID
    const show = shows.find((show) => show.show.id.toString() === id).show;

    const handleBooking = () => {
        // Store show details in local storage for booking form
        localStorage.setItem('selectedShow', JSON.stringify(show));
    };

    return (
        <div className='container'>
            <div className='summary'>
                <h2>Summary</h2>
                <h3>{show.name}</h3>
                <p>{show.summary}</p>
                <Link to={`/booking/${id}`} onClick={handleBooking} className='booking-button'>
                    Book Tickets
                </Link>
            </div>
        </div>
    );
};

export default ShowSummary;
