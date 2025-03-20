// src/services/weatherService.js

// this is where we'll store our logic for fetching data?

// info gathered from weatherapi.com
// At the top of this file, we’ll define a BASE_URL. This variable represents the initial part of the URL we wish to make requests to. It typically includes the protocol, domain name, and any path segments shared across the API’s endpoints.
// A BASE_URL simplifies making requests within different service functions that share the same starting point, as additional parameters or paths can be appended within each function.

const API_KEY = '90348aeb047543a49b6225413252003';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        // queryString matches the url we got from weatherapi.com that was location specific
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        console.log('Data:', data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

// add any city below
// show('Portland');

export { show };