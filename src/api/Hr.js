import axios from 'axios'

const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
// const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})


//Hr
export const fetchAllHrOfCompany = (cid) =>  API.get(`/get-all-hr/${cid}`)
export const deleteHrAccount = ({hrId,cid}) =>  API.delete(`/delete-hr/${cid}/${hrId}`)
export const activateHrAccount = ({token,hrid,formData}) =>  API.patch(`/activate-hr-account/${token}/${hrid}` ,formData)

