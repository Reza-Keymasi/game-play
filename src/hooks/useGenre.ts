import { useEffect, useState } from "react";
import apiClient from "../services/client-api";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
    
      const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState("");
      const [isLoading,setIsLoading] = useState(false)
      useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient
          .get<FetchGenreResponse>("/genres", {signal:controller.signal})
          .then((response) => {
            setGenres(response.data.results)
            setIsLoading(false)
          })
          .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setIsLoading(false)
          });
    
          return () => controller.abort()
      }, []);
      console.log(genres);

      return {genres, error, isLoading}
    
    };

export default useGenre