import axios from 'axios';

axios.defaults.baseURL = 'https://live.vamoos.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchData = () => {
    return axios.get('/itineraries/VMD-VL1234')
};
