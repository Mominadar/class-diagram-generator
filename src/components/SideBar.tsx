import { AiOutlineNodeExpand } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSave, MdSaveAlt } from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
import SideBarButton from "./SideBarButton";
interface SideBarProps {
  handleAddClass: () => void;
  handleAddAttribute: (data: any) => void;
  handleSave: () => void;
  handleDownload: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}
export default function SideBar({
  handleAddClass,
  handleAddAttribute,
  handleSave,
  handleDownload,
  isCollapsed,
  setIsCollapsed,
}: SideBarProps) {
  return (
    <div className="bg-gradient flex flex-col flex-grow-1 flex-auto justify-start gap-5 py-20 min-h-full relative">
      <SideBarButton
        color="red"
        onClick={handleAddClass}
        icon={<VscSymbolClass fontSize={25} />}
        text="Add Class"
        isCollapsed={isCollapsed}
      />
      <SideBarButton
        color="orange"
        onClick={handleAddAttribute}
        icon={<AiOutlineNodeExpand fontSize={25} />}
        text="Add Attribute"
        isCollapsed={isCollapsed}
      />

      <SideBarButton
        color="yellow"
        onClick={handleSave}
        icon={<MdOutlineSave fontSize={25} />}
        text="Save"
        isCollapsed={isCollapsed}
      />
      <SideBarButton
        color="blue"
        onClick={handleDownload}
        icon={<MdSaveAlt fontSize={25} />}
        text="Download"
        isCollapsed={isCollapsed}
      />

      <button
        className={`btn bg-orange bordder-4 border-orange rounded-[50px] w-fit p-[5px] absolute right-[-50px] bottom-5 z-10`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <IoIosArrowBack fontSize={42} className="text-white" />
      </button>
    </div>
  );
}
