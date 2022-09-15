import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { BiPlus } from "react-icons/bi";
import InputField from "./InputField";
import { ClassElement } from "./types";

const handleStyle = { left: 10 };

interface ClassNodeProps {
  classElement?: ClassElement;
}

function ClassNode({ classElement }: ClassNodeProps) {
  const [attributes, setAttributes] = useState(classElement?.attributes ?? []);
  const [className, setClassName] = useState(classElement?.className ?? "");
  const onChange = useCallback((evt: any) => {
    console.log(evt?.target.value);
  }, []);

  const onAddAttribute = (data: any) => {
    console.log("data,", data);
    console.log("attt", attributes);
    const newAttr = { id: `${className}-attr-${attributes.length}`, ...data };
    setAttributes([newAttr, ...attributes]);
  };
  const onSaveAttribute = (data: any) => {
    console.log("data,", data);
    console.log("attt", attributes);
    const newAttr = { id: `${className}-attr-${attributes.length}`, ...data };
    setAttributes([newAttr, ...attributes]);
  };

  const onEditAttribute = () => {};

  const onDeleteAttribute = () => {};

  return (
    <div className="h-full p-[10px] border-[1px] border-solid border-[#eee] border-radius-[500px] bg-white rounded-[5px]">
      <Handle type="target" position={Position.Top} />
      <div className="flex justify-between">
        <input
          className="text-[10px] text-slate-400 capitalize"
          id="text"
          name="text"
          placeholder="Class Name"
          onChange={onChange}
        />
        <button
          type="submit"
          onClick={onAddAttribute}
          className="text-[7px] text-center flex items-center justify-center col-span-1"
        >
          <BiPlus
            fontSize={12}
            className="text-slate-600 bg-slate-200 rounded-[10px]"
          />
        </button>
      </div>
      <div className="grid grid-cols-7">
        <label className="text-[6px] text-slate-400 col-span-2">name</label>
        <label className="text-[6px] text-slate-400 col-span-2">
          data type
        </label>
        <label className="text-[6px] text-slate-400 col-span-2">key type</label>
        <label className="text-[6px] text-slate-400 col-span-1">actions</label>
      </div>
      <div className="flex flex-col h-full">
        {attributes.map((attribute) => {
          return (
            <InputField key={attribute.id} addAttribute={onAddAttribute} />
          );
        })}
      </div>
      <div className="flex flex-col h-full" id="attributes-list">
        <InputField addAttribute={onAddAttribute} />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
      />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default ClassNode;
