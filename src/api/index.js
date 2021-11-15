import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company'})

//Auth
export const registerCompany = (formData) => API.post('/register',formData) 
export const loginCompany = (formData) => API.post('/login',formData) 
export const reregister = ({formData,id}) => API.patch(`/reregister?id=${id}`,formData) 


//company
export const fetchCompanyDetails = (id) =>  API.get(`/company/${id}`)