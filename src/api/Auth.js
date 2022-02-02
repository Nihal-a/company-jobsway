import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
// const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})
// const API = axios.create({ baseURL:'http://companyapi.jobsway.online/api/v1/company'})


//Auth
export const registerCompany = (formData) => API.post('/register',formData) 
export const loginCompany = (formData) => API.post('/login',formData) 
export const reregister = ({formData,id}) => API.patch(`/reregister?id=${id}`,formData) 
export const createHrAccount = ({formData , cid}) => API.post(`/add-company-hr/${cid}`,formData) 
export const loginHrAccount = (formData) => API.post('/login/hr',formData) 


