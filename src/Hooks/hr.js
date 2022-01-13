import {  useMutation, useQueryClient } from 'react-query'
import {createHrAccount, loginHrAccount} from '../api/index'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'




export const CreateHrAccount = () => {

    return useMutation(createHrAccount , {
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

