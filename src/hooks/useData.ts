import { useEffect, useState } from "react";
import apiClient from "../services/client-api";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?:AxiosRequestConfig, deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);
  console.log(data);

  return { data, error, isLoading };
};

export default useData;
