import axios from 'axios'

// const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
// const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})
const API = axios.create({ baseURL:'http://companyapi.jobsway.online/api/v1/company'})




//users
export const fetchDashboardDetails = (hrId) => API.get(`/user/task/completed/${hrId}`)
export const fetchAppliedUsers = (hrId) => API.get(`/jobs/applied-users/${hrId}`)
export const fetchShortListedUsers = (hrId) => API.get(`applicants/shortlisted/${hrId}`)
export const rejectApplicant = ({hrId , data}) => API.patch(`/applicants/reject/${hrId}` , data)
export const shortListApplicant = ({hrId , data}) => API.patch(`/applicants/shortlist/${hrId}` , data)
export const assignTasktoUser = ({hrId , data}) => API.post(`/task/assign/${hrId}` , data)
export const rejectCompletedTask = (taskId) => API.delete(`/task/completed/reject/${taskId}`)
export const approveTaskCompleted = ({taskId , data}) => API.patch(`/task/completed/approve/${taskId}` ,data)