import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: { maxResults: '50' },
    headers: {
        'X-RapidAPI-Key': 'd0acb6dab5mshaee54af10376a0bp1e3a44jsn4d8412bd0eb2',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}