interface SideBarButtonProps {
  onClick: () => void;
  color: string;
}

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export default function SideBarButton({
  children,
  color,
  onClick,
}: React.PropsWithChildren<SideBarButtonProps>) {
  const getColor = () => {
    switch (color) {
      case "red":
        return "bg-red border-red";
      case "yellow":
        return "bg-yellow border-yellow";
      case "blue":
        return "bg-blue border-blue";
      default:
        return "bg-orange border-orange";
    }
  };
  return (
    <button className={classNames("btn", getColor())} onClick={onClick}>
      {children}
    </button>
  );
}
