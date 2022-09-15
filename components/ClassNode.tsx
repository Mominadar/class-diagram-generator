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

  const onChange = useCallback((evt: any) => {
    console.log(evt?.target.value);
  }, []);

  const onAddAttribute = (data: any) => {
    // const app = document.getElementById('attributes-list');

    //   // Create a new H1 element
    //   const header = document.createElement('h1');

    //   // Create a new text node for the H1 element
    //   const headerContent = document.createTextNode(
    //     'Develop. Preview. Ship. 🚀',
    //   );

    //   // Append the text to the H1 element
    //   header.appendChild(headerContent);

    //   // Place the H1 element inside the div
    //   app?.appendChild(header);
    console.log("data,", data);
    setAttributes([...attributes, data]);
  };

  console.log("dddd", attributes);

  const onEditAttribute = () => {};

  const onDeleteAttribute = () => {};

  return (
    <div className="text-updater-node h-full">
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
            <InputField key={attribute.name} addAttribute={onAddAttribute} />
          );
        })}
      </div>
      <div className="flex flex-col h-full" id="attributes-list">
        <InputField addAttribute={onAddAttribute} />
        <button onClick={onAddAttribute}>add attribute</button>
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
