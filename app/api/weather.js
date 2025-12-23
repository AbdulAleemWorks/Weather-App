import axios from 'axios';
import {apiKey} from '../constants/index.js';

const forecastEndpoint = params=>
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const locationEndpoint = params =>
  `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;
apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

export const getForecastData = params => {
    return apiCall(forecastEndpoint(params));
}
export const getLocationData = params => {
    return apiCall(locationEndpoint(params));
}