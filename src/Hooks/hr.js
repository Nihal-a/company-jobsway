import {  useMutation, useQuery, useQueryClient } from 'react-query'
// import {createHrAccount, fetchAllHrOfCompany, loginHrAccount} from '../api/Auth'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'
import { createHrAccount, loginHrAccount } from '../api/Auth'
import { fetchAllHrOfCompany } from '../api/Hr'




export const CreateHrAccount = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(createHrAccount , {
        onSuccess : ({data}) => {
            toast.success(`Sent Sign In Link to ${data.hr.email}`)
            queryClient.invalidateQueries(['All-Hr'])
            history.push('/hr-management')
        },
        onError: (error) => {
            toast.error(error)
        },
    })
    
}

export const LoginHrAccount = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(loginHrAccount , {
        onSuccess: ({data}) => {
            queryClient.setQueryData('hrData' , () => data.data)
            localStorage.setItem('hrData' , JSON.stringify(data))
            history.push('/')
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error(err)
        },
    })
    
}


export const useAllHrDetails = (cid) => {
    return useQuery('All-Hr' , () =>  fetchAllHrOfCompany(cid))
}