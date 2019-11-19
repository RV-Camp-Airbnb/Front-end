import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        barseURL: 'https://cuylite.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
            // 'Access-Control-Allow-Origin': '*',
        },
    });
};

  
// import axios from 'axios';

// export const axiosWithAuth = () => {
//     const token = localStorage.getItem('token');

//     return axios.create({
//         barseURL: 'http://localhost:5000',
//         headers: {
//             Authorization: token
//         }
//     });
// };