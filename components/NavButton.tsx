interface NavButtonProps {
  text: string;
  handleClick: () => void;
}
export default function NavButton({ text, handleClick }: NavButtonProps) {
  return (
    <button
      className="bg-orange mx-3 my-3 px-4 py-2 border-2 border-solid border-orange text-gray-light"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
