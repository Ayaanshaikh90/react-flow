"use client";
import {
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
  ReactFlow,
  Background,
  getBezierPath,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
// ... (all your node and edge imports)
import Sidebar from "./Sidebar";
import AscendingPipeNode from "../Nodes/AscendingPipeNode";
import BalloonNode from "../Nodes/BalloonNode";
import BioGasNode from "../Nodes/BioGasNode";
import CrusherNode from "../Nodes/CrusherNode";
import CustomEdge from "../Edges/CustomEdge";
import CustomNode from "../Nodes/CustomNode";
import DigesterAgitatorNode from "../Nodes/DigesterAgitatorNode";
import DigesterNode from "../Nodes/DigesterNode";
import DustbinNode from "../Nodes/DustbinNode";
import EditableNode from "../Nodes/EditableNode";
import ElbowPipeNode from "../Nodes/ElbowPipeNode";
import FlarningUnitNode from "../Nodes/FlarningUnitNode";
import FlowmeterNode from "../Nodes/FlowmeterNode";
import GasAnalyzerNode from "../Nodes/GasAnalyzerNode";
import GeneratorNode from "../Nodes/GeneratorNode";
import H2sSensorNode from "../Nodes/H2sSensorNode";
import IotSystemNode from "../Nodes/IotSystemNode";
import PhSensorNode from "../Nodes/PhSensorNode";
import PressureSensorNode from "../Nodes/PressureSensorNode";
import ScruberNode from "../Nodes/ScruberNode";
import SegregationTableNode from "../Nodes/SegregationTableNode";
import StorageTankNode from "../Nodes/StorageTankNode";
import TankNode from "../Nodes/TankNode";
import TempSensorNode from "../Nodes/TempSensorNode";
import TPipeNode from "../Nodes/TPipeNode";
import ValveNode from "../Nodes/ValveNode";
import VibrSensorNode from "../Nodes/VibrSensorNode";

import { useState, useRef, useCallback } from "react";
import GasPurifireNode from "../Nodes/GasPuriFireNode";
import FertilizerNode from "../Nodes/FertinizerNode";

const edgeTypes = {
  customEdge: CustomEdge,
};

const nodeTypes = {
  ascendingPipeNode: AscendingPipeNode,
  balloonNode: BalloonNode,
  bioGasNode: BioGasNode,
  crusherNode: CrusherNode,
  customNode: CustomNode,
  digesterAgitatorNode: DigesterAgitatorNode,
  digesterNode: DigesterNode,
  dustbinNode: DustbinNode,
  editableNode: EditableNode,
  elbowPipeNode: ElbowPipeNode,
  fertilizerNode: FertilizerNode,
  flarningUnitNode: FlarningUnitNode,
  flowmeterNode: FlowmeterNode,
  gasAnalyzerNode: GasAnalyzerNode,
  gasPurifireNode: GasPurifireNode,
  generatorNode: GeneratorNode,
  h2sSensorNode: H2sSensorNode,
  iotSystemNode: IotSystemNode,
  phSensorNode: PhSensorNode,
  pressureSensorNode: PressureSensorNode,
  scruberNode: ScruberNode,
  segregationTableNode: SegregationTableNode,
  storageTankNode: StorageTankNode,
  tankNode: TankNode,
  tempSensorNode: TempSensorNode,
  tPipeNode: TPipeNode,
  valveNode: ValveNode,
  vibrSensorNode: VibrSensorNode,
};

function CustomConnectionLine({ fromX, fromY, toX, toY }: any) {
  const [edgePath] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path
        d={edgePath}
        fill="none"
        stroke="#888888"
        strokeWidth={20}
        strokeDasharray="none"
      />
      <path
        d={edgePath}
        fill="none"
        stroke="#cccccc"
        strokeWidth={10}
        strokeDasharray="none"
      />
    </g>
  );
}

let id = 1;
const getId = () => `dndnode_${id++}`;

function FlowCanvasInner() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { screenToFlowPosition } = useReactFlow();

  const onNodeContextMenu = (event: React.MouseEvent, node: Node) => {
    event.preventDefault();
    setSelectedNode(node);
  };

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, height: "100%" }} ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeContextMenu={onNodeContextMenu}
          onConnect={(params) =>
            setEdges((eds) =>
              addEdge(
                {
                  ...params,
                  type: "customEdge",
                  animated: true,
                  label: "Gas Line",
                },
                eds
              )
            )
          }
          onDragOver={onDragOver}
          onDrop={onDrop}
          connectionLineComponent={CustomConnectionLine}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          defaultEdgeOptions={{
            type: "customEdge",
            animated: true,
            label: "Gas Line",
          }}
          fitView
          // 👇 Add this prop to enable deletion with Backspace and Delete keys
          deleteKeyCode={["Backspace", "Delete"]}
        >
          <Background variant="dots" size={1.5} gap={16} />
        </ReactFlow>
      </div>
      {/* Your node resize panel code remains here */}
    </div>
  );
}

export default function FlowCanvas() {
  return (
    <ReactFlowProvider>
      <FlowCanvasInner />
    </ReactFlowProvider>
  );
}
