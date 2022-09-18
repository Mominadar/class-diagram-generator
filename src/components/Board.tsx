import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Connection,
  ConnectionLineType,
  ConnectionMode,
  ControlButton,
  Controls,
  Edge,
  EdgeChange,
  NodeChange,
  NodeTypes,
  useReactFlow,
} from "react-flow-renderer";
import { GiHorizontalFlip, GiVerticalFlip } from "react-icons/gi";
import getLayoutedElements from "../utils/setLayout";
import ClassNode from "./ClassNode";

const nodeTypes: NodeTypes = { classNode: ClassNode };

interface BoardProps {
  nodes: Node[];
  edges: Edge[];
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Node[]) => void;
}

function Board({ nodes, edges, setNodes, setEdges }: BoardProps) {
  const reactFlowInstance = useReactFlow();

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
      reactFlowInstance.fitView();
    },

    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((eds: Edge<any>[]) =>
        addEdge(
          {
            ...connection,
            type: ConnectionLineType.Step,
          },
          eds
        )
      ),
    [setEdges]
  );

  const onLayout = useCallback(
    (direction: any) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);
      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
      reactFlowInstance.fitView();
    },
    [nodes, edges]
  );

  return (
    <ReactFlow
      id="board"
      nodesDraggable
      className="flex flex-auto bg-gray-light"
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      connectionMode={ConnectionMode.Loose}
    >
      <Background variant={BackgroundVariant.Dots} gap={12} />
      <Controls className="right-[15px] !left-auto w-fit bg-red">
        <ControlButton onClick={() => onLayout("LR")}>
          <GiHorizontalFlip />
        </ControlButton>
        <ControlButton onClick={() => onLayout("TB")}>
          <GiVerticalFlip />
        </ControlButton>
      </Controls>
    </ReactFlow>
  );
}

export default Board;
