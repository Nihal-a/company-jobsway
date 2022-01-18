import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
// const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})



//users
export const fetchAppliedUsers = (hrId) => API.get(`/jobs/applied-users/${hrId}`)
export const rejectApplicant = ({hrId , data}) => API.patch(`/applicants/reject/${hrId}` , data)

