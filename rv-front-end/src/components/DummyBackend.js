import React, {useState} from 'react';
import axios from 'axios';
function axiosLogin() {
    const clientId = 'your client id';
    const clientSecret = 'your client secret';
    return axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://deplyrvpark.herokuapp.com/api/auth/login',
        headers: {
            'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
function DummyBackend() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const handleChange = ({target: {name, value}}) => setValues({...values, [name]: value});
    const handleSubmit = e => {
        e.preventDefault();
        axiosLogin().post('/login', `grant_type=password&username=${values.username}&password=${values.password}`).then(res => console.log(res)).catch(err => console.log(err.response));
    };
    return (
        <>
            <h1>Test Java Backend Login Tool</h1>
            <p>Check the Console for Results</p>
            <form onSubmit={handleSubmit}>
                <label>Username: <input name='username' value={values.username} onChange={handleChange}/></label>
                <label>Password: <input name='password' value={values.password} onChange={handleChange}/></label>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
export default DummyBackend
;