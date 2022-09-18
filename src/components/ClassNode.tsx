import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { BiPlus } from "react-icons/bi";
import { ClassElement } from "../types";
import InputField from "./InputField";

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
    const newAttr = {
      id: `${className}-attr-${attributes.length}`,
      name: "",
      type: "",
      dataType: "",
      keyType: "",
    };
    setAttributes([...attributes, newAttr]);
  };
  const onSaveAttribute = (data: any) => {
    console.log("data,", data);
    console.log("attt", attributes);
    // const newAttr = { id: `${className}-attr-${attributes.length}`, ...data };
    // setAttributes([newAttr, ...attributes]);
  };

  const onEditAttribute = () => {};

  const onDeleteAttribute = () => {};

  return (
    <div className="h-full p-[10px] border-[1px] border-solid border-[#eee] border-radius-[500px] bg-white rounded-[5px]">
      <div className="flex justify-between  mb-[5px]">
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
          className="text-[7px] text-center flex items-center justify-center col-span-1 bg-slate-200 p-[2px] text-slate-600 rounded-[1px]"
        >
          <BiPlus
            fontSize={12}
            className="text-slate-600 bg-slate-200 rounded-[10px]"
          />
          Add Attribute
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
            <InputField
              key={attribute.id}
              addAttribute={onSaveAttribute}
              values={attribute}
            />
          );
        })}
      </div>
      <div className="flex flex-col h-full" id="attributes-list">
        <InputField addAttribute={onSaveAttribute} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Left} id="b" />
      <Handle type="source" position={Position.Right} id="c" />
      <Handle type="source" position={Position.Top} id="d" />
    </div>
  );
}

export default ClassNode;
