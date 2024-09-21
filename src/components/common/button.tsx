"use client";

interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: Props) {
  return (
    <button
      type="button"
      className="w-full h-12 bg-twitch font-semibold rounded-md text-sm flex items-center justify-center"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
