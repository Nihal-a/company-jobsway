import toast from "react-hot-toast";
import { useQuery ,useMutation, useQueryClient} from "react-query";
import { useHistory } from "react-router-dom";
import { fetchCompanyDetails, fetchCompanyJobs } from "../api/company";
import { addJob, deleteJob, fetchJobById } from "../api/jobs";
import { addFreePlan, addTransaction, verifyPayment } from "../api/payments";




export const useCompanyDetails = (id) => {
    return useQuery(['company' , id] , () =>  fetchCompanyDetails(id))
}


export const useCompanyJobs = (id , company) => {
    return useQuery(['jobs' , id] , () =>  fetchCompanyJobs(id) , {enabled : company})
}

export const useJobDetails = (id) => {
    return useQuery(['job'] , () => fetchJobById(id))
}

export const AddNewJob = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(addJob,{
        onSuccess : ({data}) => {
            console.log("jello");
            queryClient.invalidateQueries('jobs')
            history.push('/job-payment',{payment : true , jobDetails : data.job})
        },
        onError : (error) => {
            console.log("heiii");
            var errors = error.response.data.errors
            history.push('/add-job',{Err: errors})
        }
    })
}


export const VerifyJobPayment = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(verifyPayment,{
        onSuccess: (data) => {
            history.push('/jobs')
            queryClient.invalidateQueries('jobs')
            toast.success('Job Added Successfully')
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error(err)
        },
    })
}

export const AddFreeJob = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(addFreePlan,{
        onSuccess : () => {
            queryClient.invalidateQueries('jobs')
            history.push('/jobs')
            toast.success("Job Added")
        },
        onError: (error) => {
            console.log(error.response);
            // var err = error.response.data.error
            // toast.error(err)
        },
    })
}

export const AddTransaction = () => {
    const history = useHistory()
    const queryClient = useQueryClient()


    return useMutation(addTransaction,{
        onSuccess : () => {
            queryClient.invalidateQueries('jobs')
            history.push('/')
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error(err)
        },
    })
}


export const DeleteJobById = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(deleteJob,{
        onSuccess: ({data}) => {
            queryClient.invalidateQueries('jobs')
            history.push('/jobs')
            toast.success('Job Deleted')
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error(err)
        },
    })
}
