"use client";

import { useMemo } from "react";
import Game from "@/types/game";
import Image from "next/image";
import Link from "next/link";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  const replaceWidthAndHeight = useMemo(
    () => game.box_art_url.replace("{width}", "188").replace("{height}", "250"),
    [game.box_art_url]
  );

  return (
    <div className="game-card__box">
      <Link href={`/category/${game.name.toLowerCase().replaceAll(" ", "-")}`}>
        <Image
          src={replaceWidthAndHeight}
          alt={game.name}
          width={0}
          height={125}
          sizes="100vw"
          className="w-full h-full object-cover hover:cursor-pointer"
        />
      </Link>
    </div>
  );
}
