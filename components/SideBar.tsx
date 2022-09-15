import SideBarButton from "./SideBarButton";

interface SideBarProps {
  handleAddClass: () => void;
  handleAddAttribute: () => void;
  handleSave: () => void;
  handleDownload: () => void;
}
export default function SideBar({
  handleAddClass,
  handleAddAttribute,
  handleSave,
  handleDownload,
}: SideBarProps) {
  return (
    <div className="bg-gray flex flex-col flex-grow-1 flex-auto justify-start gap-5 py-20 min-h-full">
      <SideBarButton color="red" text="Add Class" onClick={handleAddClass} />
      <SideBarButton
        color="orange"
        text="Add Attribute"
        onClick={handleAddAttribute}
      />
      <SideBarButton color="yellow" text="Save" onClick={handleSave} />
      <SideBarButton color="blue" text="Download" onClick={handleDownload} />
    </div>
  );
}
