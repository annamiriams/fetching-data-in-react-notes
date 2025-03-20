// src/App.jsx

import './App.css';
import * as weatherService from './services/weatherService';

const App = () => {
    const fetchData = async () => {
        const data = await weatherService.show('Portland');
        console.log('Data:', data);
    };

    return (
        <main>
            <h1>Weather API</h1>
            <button onClick={fetchData}>Fetch Weather Data</button>
        </main>
    );
};

export default App;