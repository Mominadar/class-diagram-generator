import { ReactElement } from "react";
import parseClassNames from "../utils/parseClassNames";

interface SideBarButtonProps {
  onClick: () => void;
  color: string;
  icon: ReactElement;
  text: string;
  isCollapsed: boolean;
}

export default function SideBarButton({
  color,
  text,
  icon,
  isCollapsed,
  onClick,
}: SideBarButtonProps) {
  const getColor = () => {
    switch (color) {
      case "red":
        return "bg-red border-red top-[80px]";
      case "yellow":
        return "bg-yellow border-yellow top-[230px]";
      case "blue":
        return "bg-blue border-blue top-[300px]";
      default:
        return "bg-orange border-orange top-[150px]";
    }
  };
  const checkCollapsed = (element: string) => {
    switch (element) {
      case "button":
        return !isCollapsed ? "" : "btn-rounded";
      case "text":
        return !isCollapsed ? "" : "hidden";
      default:
        return "";
    }
  };
  return (
    <>
      <button
        className={parseClassNames("btn", checkCollapsed("button"), getColor())}
        onClick={onClick}
      >
        <div className="flex">
          {icon}
          <span className={parseClassNames(checkCollapsed("text"), "pl-[5px]")}>
            {text}
          </span>
        </div>
      </button>
    </>
  );
}
