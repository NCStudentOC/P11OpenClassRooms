import axios from 'axios';

export const loginUser = (credential) => {
    return axios.post('http://localhost:3001/api/v1/user/login', credential)
        .then(response => {
            const token = response.data.body.token;
            return token;
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
};