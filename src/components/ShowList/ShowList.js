import React from 'react';
import { Link } from 'react-router-dom';
import './ShowList.css'

const ShowList = ({ shows }) => {
    return (
        <div className="container">
            <h1>TV Shows</h1>
            {shows.map((show) => (
                <div className='card'>
                    <div className='compo'>
                        <div className="show" key={show.show.id}>
                            <Link to={`/summary/${show.show.id}`}>
                                <img src={show.show.image?.medium} alt={show.show.name} />
                            </Link>
                        </div>
                        <div className='show-details'>
                            <Link to={`/summary/${show.show.id}`} className='title'>
                                <h2>{show.show.name}</h2>
                            </Link>
                            <p>Type: {show.show.type}</p>
                            <p>Language: {show.show.language}</p>
                            <p>Genres: {show.show.genres.join(', ')}</p>
                            <p>Status: {show.show.status}</p>
                            <p>Runtime: {show.show.runtime} minutes</p>
                            <p>Rating: {show.show.rating.average}</p>
                            <a href={show.show.officialSite} target="_blank" rel="noopener noreferrer" className='link'>
                                Official Site
                            </a>
                        </div>
                    </div>
                    {/* <div className='detail'>
                        <p >{show.show.summary}</p>
                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default ShowList;
