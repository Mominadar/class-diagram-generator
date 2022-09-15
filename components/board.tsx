import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Connection,
  Edge,
  EdgeChange,
  NodeChange,
  NodeTypes,
} from "react-flow-renderer";
import ClassNode from "./ClassNode";

const nodeTypes: NodeTypes = { classNode: ClassNode };

interface BoardProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

function Board({ initialNodes, initialEdges }: BoardProps) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      id="board"
      className="flex flex-auto bg-gray-light"
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background variant={BackgroundVariant.Dots} gap={12} />
    </ReactFlow>
  );
}

export default Board;
