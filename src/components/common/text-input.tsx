interface Props {
  placeholder: string;
  className?: string;
}

export default function TextInput({ placeholder }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-twitch-bg text-white px-6 h-12 transition duration-200 ease-in-out focus:outline-none border border-transparent focus:border-twitch rounded-md text-sm focus:shadow focus:shadow-twitch-500/50"
    />
  );
}
