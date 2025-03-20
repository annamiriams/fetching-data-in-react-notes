// src/components/WeatherSearch/WeatherSearch.jsx

// import the useState hook
import { useState } from 'react';

const WeatherSearch = (props) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        // prevent the form's default behavior of refreshing the page every time form is submitted
        e.preventDefault();
        // We'll call the fetch function here
        setCity('');
    };

    return (
        <section>
            <h2>Search for a City</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a city:</label>
                <br />
                <input
                    id="city"
                    type="text"
                    value={city}
                    // whenever a user types a character
                    onChange={(e) => setCity(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default WeatherSearch;
