// src/App.jsx

import './App.css';
// This syntax imports everything (*) exported from the weatherService.js module and groups them inside a weatherService object. Whenever we require a specific service function, we can access it through dot notation on the weatherService object.
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch.jsx'
import { useState } from 'react';

// Here, we call upon fetchData() with an onClick event handler and log the data returned from weatherService.show('New York') to the console.
const App = () => {

    const [weather, setWeather] = useState({});

    // const fetchData = async () => {
    //     const data = await weatherService.show('Portland');
    //     console.log('Data:', data);
    // };

    const fetchData = async (city) => {
        const data = await weatherService.show(city);
        const newWeatherState = {
            location: data.location.name,
            temperature: data.current.temp_f,
            condition: data.current.condition.text,
        };
        setWeather(newWeatherState);
    };

    console.log('State:', weather);

    return (
        <main>
            <h1>Weather API</h1>
            {/* <button onClick={fetchData}>Fetch Weather Data</button> */}
            <WeatherSearch fetchData={fetchData}/>
        </main>
    );
};

export default App;