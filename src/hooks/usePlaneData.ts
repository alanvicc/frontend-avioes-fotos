import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import PlaneData from '../interface/PlaneData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<PlaneData[]> => {
      const response = axios.get(API_URL + '/plane');
      return response;
    }   

export function usePlaneData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['Plane-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}