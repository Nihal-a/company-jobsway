import { useQuery } from "react-query";
import { fetchCompanyDetails } from "../api";


export const useCompanyDetails = (id) => {
    return useQuery(['company' , id] , () =>  fetchCompanyDetails(id))
}