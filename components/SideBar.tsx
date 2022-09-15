import { AiOutlineNodeExpand } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineSave, MdSaveAlt } from "react-icons/md";
import { VscSymbolClass } from "react-icons/vsc";
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
    <div className="bg-gray flex flex-col flex-grow-1 flex-auto justify-start gap-5 py-20 min-h-full relative">
      <SideBarButton color="red" onClick={handleAddClass}>
        <VscSymbolClass fontSize={22} />
        Add Class
      </SideBarButton>
      <SideBarButton color="orange" onClick={handleAddAttribute}>
        <AiOutlineNodeExpand fontSize={22} />
        Add Attribute
      </SideBarButton>
      <SideBarButton color="yellow" onClick={handleSave}>
        <MdOutlineSave fontSize={22} />
        Save
      </SideBarButton>
      <SideBarButton color="blue" onClick={handleDownload}>
        <MdSaveAlt fontSize={22} />
        Download
      </SideBarButton>

      <button
        className={`btn bg-orange bordder-4 border-orange rounded-[50px] w-fit p-[5px] absolute right-[-50px] bottom-5 z-10`}
        onClick={() => console.log("toggle")}
      >
        <IoIosArrowBack fontSize={42} className="text-white" />
      </button>
    </div>
  );
}
