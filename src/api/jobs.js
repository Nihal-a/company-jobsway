import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
// const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})



//jobs
export const addJob = ({formData,cid,hrId}) => API.post(`/add-job/${hrId}?cid=${cid}`,formData)
export const fetchJobById = (id) =>  API.get(`/job/${id}`)
export const deleteJob = async({jobId , hrId}) => API.delete(`/delete-job/${jobId}?hrId=${hrId}`)