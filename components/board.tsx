import ReactFlow, {
  Background,
  BackgroundVariant,
  NodeTypes,
} from "react-flow-renderer";
import ClassNode from "./ClassNode";

const nodeTypes: NodeTypes = { classNode: ClassNode };

function Flow({ nodes, edges, onNodesChange, onEdgesChange, onConnect }: any) {
  return (
    <ReactFlow
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

export default Flow;
