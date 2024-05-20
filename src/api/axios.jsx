import axios from "axios";

 const AxiosAdmin = axios.create({
baseURL:"http://localhost:8000",
withCredentials:true,
withXSRFToken: true,

})



export {AxiosAdmin} ;


