import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList/ShowList';
import ShowSummary from './components/ShowSummary/ShowSummary';
import BookingForm from './components/BookingForm/BookingForm';

const App = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((data) => {
                setShows(data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, []);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<ShowList shows={shows} />} />
                    <Route path="/summary/:id" element={<ShowSummary shows={shows} />} />
                    <Route path="/booking/:id" element={<BookingForm />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
