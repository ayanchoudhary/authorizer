const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080/api',
  });

export default function registrationApi(name,email,password,gender,mobile) {
    return axiosInstance.post('/users', {
        name:name,
        email:email,
        password:password,
        gender:gender,
        mobile:mobile
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}