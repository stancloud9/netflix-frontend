import axios from 'axios';

export default axios.create({
    baseURL:'http://3.144.112.112:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
