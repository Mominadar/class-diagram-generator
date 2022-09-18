import domtoimage from "dom-to-image";
import { useState } from "react";
import { Edge, Node } from "react-flow-renderer";
import Board from "../src/components/Board";
import { initialEdges, initialNodes } from "../src/components/initialElements";
import Navbar from "../src/components/Navbar";
import SideBar from "../src/components/SideBar";
import getLayoutedElements from "../src/utils/setLayout";
import { trpc } from "../src/utils/trpc";

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

export default function IndexPage() {
  const hello = trpc.useQuery(["hello", { text: "client" }]);
  const [nodes, setNodes] = useState<Node[]>(layoutedNodes);
  const [edges, setEdges] = useState<Edge[]>(layoutedEdges);
  const handleAddClass = () => {
    const newNode: Node = {
      id: `class-node-${nodes.length}`,
      type: "classNode",
      position: { x: 0, y: 100 },
      data: {},
    };
    setNodes([newNode, ...nodes]);
  };

  const handleAddAttribute = (data: any) => {
    console.log("data,", data);
    const newAttr = { id: `class-attr-`, ...data };
  };

  const handleSave = () => {};

  const handleDownload = () => {
    console.log("savinggg");
    const node = document.getElementById("board")!;
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-dark">
      <Navbar />
      <div className=" bg-gray-dark min-h-full flex flex-auto flex-shrink-0  w-full h-full">
        <div className={isCollapsed ? "w-[4%]" : "w-[20%]"}>
          <SideBar
            handleAddClass={handleAddClass}
            handleAddAttribute={handleAddAttribute}
            handleDownload={handleDownload}
            handleSave={handleSave}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className="flex flex-grow-1 bg-red w-full">
          <Board
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
          />
        </div>
      </div>
      <footer className="text-center text-gray-light py-3">
        Class Diagram Generator &copy; {new Date().getFullYear()} Created by
        Momina Babar
      </footer>
    </div>
  );
}
