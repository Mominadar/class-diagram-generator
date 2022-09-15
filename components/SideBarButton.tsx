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
  const btnColor = fullConfig.theme?.colors[color];
  return (
    <button
      style={{ backgroundColor: `${btnColor}`, borderColor: `${btnColor}` }}
      className={`border-solid py-2 px-1 w-100 mx-5 border-4 m-2 text-gray-light uppercase flex items-center justify-center gap-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
