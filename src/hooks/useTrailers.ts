import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Trailer from "../entities/Trailer";
import APIClient from "../services/client-api";



const useTrailers = (gameId:number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
    return useQuery({
        queryKey:["trailers", gameId],
        queryFn: apiClient.getAll
    })
} 

export default useTrailers