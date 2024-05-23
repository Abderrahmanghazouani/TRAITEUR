import axios from "axios";

 const AxiosAdmin = axios.create({
baseURL:'http://localhost:8000' ,
withCredentials:true,
withXSRFToken: true,
headers: {
    'Content-Type': 'application/json',

  },

})

// AxiosAdmin.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = 'Bearer ' + token
//   }
//   return config
// })



export {AxiosAdmin} ;


