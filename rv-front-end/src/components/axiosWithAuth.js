import axios from 'axios';

export const axiosWithAuth =() => {
    const ownerToken = localStorage.getItem('ownerToken');

    return axios.create({
        barseURL: 'https://cors-anywhere.herokuapp.com/https://deplyrvpark.herokuapp.com/api/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${ownerToken}`,
        },
    });
};
