import axios from 'axios'

// const API = axios.create({ baseURL:'http://localhost:4000/api/v1/company/'})
const API = axios.create({ baseURL:'https://jobsway-company.herokuapp.com/api/v1/company/'})

//Auth
export const registerCompany = (formData) => API.post('/register',formData) 
export const loginCompany = (formData) => API.post('/login',formData) 
export const reregister = ({formData,id}) => API.patch(`/reregister?id=${id}`,formData) 
export const createHrAccount = ({formData , cid}) => API.post(`/add-company-hr/${cid}`,formData) 
export const loginHrAccount = (formData) => API.post('/login/hr',formData) 


//company
export const fetchCompanyDetails = (id) =>  API.get(`/company/${id}`)
export const fetchCompanyJobs = (id) =>  API.get(`/jobs/${id}`)

//Hr
export const fetchAllHrOfCompany = (cid) =>  API.get(`/get-all-hr/${cid}`)

//payment
export const payment = (amount,id) => API.post(`/addjobpayment?id=${id}`,amount)
export const stripePay = (amount,id) => API.post(`/stripe-intent/${id}`,amount)
export const verifyPayment = ({response,order,transactionDetails}) => API.post('/verify-payment',{response,order,transactionDetails})
export const addFreePlan = (jobId) => API.post('/add-free-plan',jobId)
export const addTransaction = (transactionDetails) => API.post('/add-transaction',transactionDetails)
export const fetchStripeIntent = (plan) => API.post('/create-payment-intent',plan)

//jobs
export const addJob = ({formData,id}) => API.post(`/add-job?id=${id}`,formData)
export const fetchJobById = (id) =>  API.get(`/job/${id}`)
export const deleteJob = (id) => API.delete(`/delete-job/${id}`)