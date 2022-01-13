import {  useMutation, useQueryClient } from 'react-query'
import {loginCompany, registerCompany, reregister ,loginHrAccount} from '../api/index'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'



export const RegisterCompany = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(registerCompany,{
        onSuccess: ({data}) => {
            queryClient.setQueryData('company' , () => data.data)
            localStorage.setItem('company' , JSON.stringify(data))
            history.push('/')
        },
        onError: (error) => {
            var errors = error.response.data.errors
            history.push('/register',{Err: errors})
        },
    })
}

export const LoginCompany = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(loginCompany,{
        onSuccess: ({data}) => {
            queryClient.setQueryData('company' , () => data.data)
            localStorage.setItem('company' , JSON.stringify(data))
            history.push('/')
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error(err)
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

export const ReRegisterCompany = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(reregister,{
        onSuccess : ({data}) => {
            queryClient.setQueryData('company' , () => data.data)
            localStorage.setItem('company' , JSON.stringify(data))
            history.push('/')
        },
        onError : (error) => {
            var err = error.response.data.error
            toast.error(err)
        }
    })
}