import {  useMutation, useQuery, useQueryClient } from 'react-query'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'
import { fetchAppliedUsers, rejectApplicant } from '../api/user'



export const useAppliedUsers = (hrId) => {
    return useQuery(['appliedUsers'] , () =>  fetchAppliedUsers(hrId))
}

export const RejectApplicant = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(rejectApplicant , {
        onSuccess : ({data}) => {
            queryClient.invalidateQueries(['appliedUsers'])
            history.push('/applications')
            toast.success(data.msg)
        },
        onError : (error) => {
            toast.error("Something went wrong.")
        }
    })

}

