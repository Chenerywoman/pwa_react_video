import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({path: '../../.env'});

const key = process.env.REACT_APP_API_KEY;

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (query) => {
    // destructure data from response
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: key
        }
    });

    return data;
}

