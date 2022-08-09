import axios from 'axios'
import {Accommodation} from "../model/Accommodation";

const getHeader = () => {
    return {
        headers: {
            'x-country-code': 'de',
            'Content-Type': 'application/json',
        },
    }
}

export function getAccommodations() : Promise<Accommodation[]> {
    return axios
        .get('/api/accommodation', getHeader())
        .then(response => response.data)
        .catch(console.error)
}