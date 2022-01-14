import {  useMutation, useQuery, useQueryClient } from 'react-query'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'
import { createHrAccount, loginHrAccount } from '../api/Auth'
import { activateHrAccount, deleteHrAccount, fetchAllHrOfCompany } from '../api/Hr'






export const useAllHrDetails = (cid) => {
    return useQuery('All-Hr' , () =>  fetchAllHrOfCompany(cid))
}


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
            toast.error(error.response.data.msg)
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

export const DeleteHrAccount = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(deleteHrAccount , {
        onSuccess : ({data}) => {
            toast.success(data.msg)
            queryClient.invalidateQueries(['All-Hr'])
            history.push('/hr-management')
        },
        onError: (error) => {
            toast.error("error")
        },
    })
    
}

export const ActivateHrAccount = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(activateHrAccount , {
        onSuccess : ({data}) => {
            history.push('/login')
        },
        onError: (error) => {
            toast.error(error.response.data.msg)
        }
    })
}