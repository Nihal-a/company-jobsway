import toast from "react-hot-toast";
import { useQuery ,useMutation} from "react-query";
import { useHistory } from "react-router-dom";
import { addJob, fetchCompanyDetails } from "../api";


export const useCompanyDetails = (id) => {
    return useQuery(['company' , id] , () =>  fetchCompanyDetails(id))
}

export const AddNewJob = () => {
    const history = useHistory()

    return useMutation(addJob,{
        onSuccess : ({data}) => {
            console.log("Data : ",data.job);
            history.push('/job-payment',{payment : true , jobDetails : data.job})
        },
        onError : (error) => {
            var err = error.response.data.error
            toast.error(err)
        }
    })
}
