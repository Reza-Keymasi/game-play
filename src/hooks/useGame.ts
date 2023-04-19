import { useEffect, useState } from "react";
import apiClient from "../services/client-api";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>("/games", {signal:controller.signal})
      .then((response) => setGames(response.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort()
  }, []);
  console.log(games);

  return {games, error}
};

export default useGames;
