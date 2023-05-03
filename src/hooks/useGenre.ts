import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/client-api";
import { FetchResponse } from "../services/client-api";
import genres from "../data/genre";

const apiClient = new APIClient<Genre>("/genres")

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
