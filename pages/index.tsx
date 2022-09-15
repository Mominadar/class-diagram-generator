import { useCallback, useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";
import Board from "../components/board";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

import { trpc } from "../utils/trpc";

const initialNodes = [
  {
    id: "node-1",
    type: "classNode",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "classNode",
    targetPosition: "top",
    position: { x: 0, y: 200 },
    data: { value: 123 },
  },
  {
    id: "node-3",
    type: "classNode",
    targetPosition: "top",
    position: { x: 200, y: 200 },
    data: { value: 123 },
  },
];

const initialEdges = [
  { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
  { id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
];

export default function IndexPage() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const hello = trpc.useQuery(["hello", { text: "client" }]);

  const handleAddClass = () => {};
  const handleAddAttribute = () => {};
  const handleSave = () => {};
  const handleDownload = () => {};

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-dark">
      <Navbar />
      <div className="grid grid-cols-4  bg-gray-dark min-h-full flex-1">
        <div className="col-span-1">
          <SideBar
            handleAddClass={handleAddClass}
            handleAddAttribute={handleAddAttribute}
            handleDownload={handleDownload}
            handleSave={handleSave}
          />
        </div>
        <div className="col-span-3">
          <Board nodes={nodes} edges={edges} />
        </div>
      </div>
      <footer className="flex-grow-1 text-center text-gray-light py-3">
        Created by Momina Babar
      </footer>
    </div>
  );
}
