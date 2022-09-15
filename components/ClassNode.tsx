import { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
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
  const onEditAttribute = () => {};

  const onDeleteAttribute = () => {};

  return (
    <div className="text-updater-node h-full p-20">
      <Handle type="target" position={Position.Top} />
      <div className="flex flex-col">
        <input
          id="text"
          name="text"
          placeholder="class name"
          onChange={onChange}
        />
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
