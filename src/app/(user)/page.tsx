import gamesService from "@/api/services/games-service";
import GameCard from "@/components/common/game-card";
import ChannelSlider from "@/components/sliders/channel-slider";
import { GAMES } from "@/utils/data";
import { ChevronRight } from "lucide-react";

const getData = async () => {
  try {
    const { data } = await gamesService.getTopGames();

    return {
      success: true,
      data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
    };
  }
};

export default async function Home() {
  const { success, data } = await getData();

  if (!success || !data) return <p>sin juegos</p>;

  const { data: topGames } = data;

  return (
    <div className="py-4 flex flex-col gap-6">
      <div className="container">
        <h2 className="font-semibold">Recomendados para ti</h2>

        <div className="w-full flex justify-center py-4">
          <ChannelSlider />
        </div>
      </div>

      {/* top games */}
      <div className="container space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Mejores juegos</h2>
          <button
            type="button"
            className="text-white bg-twitch-bg py-2 px-4 rounded-md text-xs flex items-center gap-1"
          >
            Más juegos
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-10 gap-2 game-card__container">
          {topGames.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>

      {/* followed games */}
      <div className="container space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Juegos seguidos</h2>
          <button
            type="button"
            className="text-white bg-twitch-bg py-2 px-4 rounded-md text-xs flex items-center gap-1"
          >
            Más juegos
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-10 gap-2 game-card__container">
          {GAMES.slice(10, 20).map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
