import toast from "react-hot-toast";
import { useQuery ,useMutation, useQueryClient} from "react-query";
import { useHistory } from "react-router-dom";
import { addJob, fetchCompanyDetails, verifyPayment,addFreePlan ,fetchCompanyJobs, addTransaction} from "../api";


export const useCompanyDetails = (id) => {
    return useQuery(['company' , id] , () =>  fetchCompanyDetails(id))
}

export const AddNewJob = () => {
    const history = useHistory()

    return useMutation(addJob,{
        onSuccess : ({data}) => {
            history.push('/job-payment',{payment : true , jobDetails : data.job})
        },
        onError : (error) => {
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
            history.go('/jobs')
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

    return useMutation(addFreePlan,{
        onSuccess : () => {
            console.log("its here fool");
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error(err)
        },
    })
}

export const AddTransaction = () => {
    const history = useHistory()

    return useMutation(addTransaction,{
        onSuccess : () => {
            console.log("its here fool");
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error(err)
        },
    })
}


export const useCompanyJobs = (id) => {
    return useQuery(['jobs' , id] , () =>  fetchCompanyJobs(id),{
        refetchOnMount:"always"
    })
}