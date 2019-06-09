import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:4000/',
})

const EndPoint = {
    search: (text) => Api.post('search', text),
}

export default EndPoint;

