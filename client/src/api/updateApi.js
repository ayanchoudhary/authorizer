const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080/api',
  });

export default function updateApi(name,email,gender,mobile) {
    return axiosInstance.put('/users/updateInfo', {
        name:name,
        email:email,
        gender:gender,
        mobile:mobile
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}