import {  useMutation, useQuery, useQueryClient } from 'react-query'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'
import { fetchAppliedUsers } from '../api/user'



export const useAppliedUsers = (hrId) => {
    return useQuery(['appliedUsers'] , () =>  fetchAppliedUsers(hrId))
}