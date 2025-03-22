// src/App.jsx

import './App.css';
// This syntax imports everything (*) exported from the weatherService.js module and groups them inside a weatherService object. Whenever we require a specific service function, we can access it through dot notation on the weatherService object.
import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch.jsx'
import WeatherDetails from './components/WeatherDetails/WeatherDetails.jsx'
// adding  in useEffect
import { useState, useEffect } from 'react';

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

    // adding in useEffect hook so that default (New York) data is rendered on the page when it's initially loaded
    useEffect(() => {
        // define a fetch function:
        const fetchDefaultData = async () => {
            const data = await weatherService.show('New York');
            const newWeatherState = {
                location: data.location.name,
                temperature: data.current.temp_f,
                condition: data.current.condition.text,
            };
            setWeather(newWeatherState);
        };
            
            // without calling this function, we've only defined the fetchDefaultData function and as a result, we won't see anything in the UI. without the next line of code, every time the useEffect() hook runs, the above only recreates the fetchDefaultData() function.
            fetchDefaultData();

    // an empty dependency array (below) means that this runs once after the initial rerender 
    }, []);

    return (
        <main>
            <h1>Weather API</h1>
            {/* <button onClick={fetchData}>Fetch Weather Data</button> */}
            <WeatherSearch fetchData={fetchData}/>
            <WeatherDetails weather={weather}/>
        </main>
    );
};

export default App;