import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./../tailwind.config.js";

interface SideBarButtonProps {
  onClick: () => void;
  color: string;
}
export default function SideBarButton({
  children,
  color,
  onClick,
}: React.PropsWithChildren<SideBarButtonProps>) {
  const fullConfig = resolveConfig(tailwindConfig);
  const btnColor = fullConfig!.theme?.colors[color] ?? "red";
  return (
    <button
      style={{ backgroundColor: `${btnColor}`, borderColor: `${btnColor}` }}
      className={`btn`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
