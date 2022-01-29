import {  useMutation, useQuery, useQueryClient } from 'react-query'
import {useHistory} from "react-router-dom"
import toast from 'react-hot-toast'
import { approveTaskCompleted, assignTasktoUser, fetchAppliedUsers, fetchDashboardDetails, fetchShortListedUsers, fetchTaskCompletedUsers, rejectApplicant, rejectCompletedTask, shortListApplicant } from '../api/user'
import swal from 'sweetalert'



export const useAppliedUsers = (hrId) => {
    return useQuery(['appliedUsers'] , () =>  fetchAppliedUsers(hrId))
}

export const useShortlistedUsers = (hrId) => {
    return useQuery(['shortListedUsers'] , () =>  fetchShortListedUsers(hrId))
}


export const useTaskCompletedUsers = (hrId , hstatus) => {
    return useQuery(['taskCompletedUsers'] , () =>  fetchDashboardDetails(hrId) , { enabled : hstatus })
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


export const ShortListApplicant = () => {
    const history = useHistory()
    const queryClient = useQueryClient()

    return useMutation(shortListApplicant , {
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

export const AssignTaskToUser = () => {
    const history = useHistory()
    const queryClient = useQueryClient()


    return useMutation(assignTasktoUser , {
        onSuccess : ({data}) => {
            history.push('/shortlist')
            toast.success(data.msg)
            swal.close()
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })
}


export const RejectCompletedTask = () => {
    const history = useHistory()
    const queryClient = useQueryClient()


    return useMutation(rejectCompletedTask , {
        onSuccess : ({data}) => {
            queryClient.invalidateQueries(['taskCompletedUsers'])
            toast.success(data.msg)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })
}

export const ApproveTaskCompleted = () => {
    const history = useHistory()
    const queryClient = useQueryClient()


    return useMutation(approveTaskCompleted , {
        onSuccess : ({data}) => {
            queryClient.invalidateQueries(['taskCompletedUsers'])
            toast.success(data.msg)
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })
}