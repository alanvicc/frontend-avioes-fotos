import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import PlaneData from '../interface/PlaneData';

const API_URL = 'http://localhost:8080';

const postData = async (data: PlaneData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/plane', data);
    return response;
}

export function usePlaneDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['Plane-data'])
        }
    })

    return mutate;
}