import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 58c3d2f8a7b71c107a7ce2d3567efeaf1781925d35067e9ffb96e7ed9d1b429e'
    }
});