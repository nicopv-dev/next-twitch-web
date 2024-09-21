"use client";

import { useState } from "react";
import { Bell, Crown, DiamondPlusIcon, Mail, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search?q=${search}`);
  };

  return (
    <header className="h-20 container flex items-center justify-between sticky top-0 left-0 right-0 z-20 w-full bg-[#272729]">
      {/* search */}
      <div className="flex items-center gap-2 w-full">
        <form
          className="bg-twitch-bg rounded-md flex items-center px-4 max-w-md w-full"
          onSubmit={handleSearch}
        >
          <button type="submit">
            <Search size={16} />
          </button>
          <input
            type="text"
            placeholder="Buscar streamers"
            className="bg-twitch-bg px-4 h-12 rounded-md w-full focus:outline-none text-sm grow"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <button
          type="button"
          className="h-12 px-4 bg-twitch rounded-md flex items-center gap-2"
        >
          <DiamondPlusIcon size={20} />
          Obtener bytes
        </button>
      </div>

      {/* profile */}
      <div className="flex items-center gap-6">
        <div>
          <div className="size-10 rounded bg-gradient-to-r from-twitch-600 to-twitch-500" />
        </div>
        <div className="flex items-center gap-6">
          <button>
            <Crown size={20} />
          </button>
          <button>
            <Bell size={20} />
          </button>
          <button>
            <Mail size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
