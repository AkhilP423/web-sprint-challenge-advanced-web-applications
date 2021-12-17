import axios from 'axios';

//finished axios with AUTH, created Token

const axiosWithAuth = ()=> {

    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL:"http://localhost:5000"
    });
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth DONE