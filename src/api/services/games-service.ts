import api from "@/lib/axios";
import Game from "@/types/game";

class GamesService {
  getTopGames = async () =>
    await api.get<{
      data: Game[];
    }>("/games/top");
}

export default new GamesService();
