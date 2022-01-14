import axios from 'axios'

// const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})



//jobs
export const addJob = ({formData,id}) => API.post(`/add-job?id=${id}`,formData)
export const fetchJobById = (id) =>  API.get(`/job/${id}`)
export const deleteJob = (id) => API.delete(`/delete-job/${id}`)