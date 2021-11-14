import {  useMutation, useQueryClient } from 'react-query'
import {registerCompany} from '../api/index'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'
import swal from 'sweetalert'


export const RegisterCompany = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(registerCompany,{
        onSuccess: (data) => {
            queryClient.setQueryData('company' , () => data.data)
            history.push('/',{status : false})
        },
        onError: (error) => {
            var err = error.response.data.error
            toast.error('Company already exists')
        },
    })
}