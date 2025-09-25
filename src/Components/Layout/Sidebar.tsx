"use client";

import React from "react";

// 1. Import all the SVG components you want to display
import AscendingPipeSvg from "../SVG/AscendingPipeSvg";
import BalloonSvg from "../SVG/BalloonSvg";
import BioGasSvg from "../SVG/BioGasSvg";
import CrusherSvg from "../SVG/CrusherSvg";
import DigesterSvg from "../SVG/DigesterSvg";
import DigesterAgitatorSvg from "../SVG/DigesterAgitatorSvg";
import DustbinSvg from "../SVG/DustbinSvg";
import ElbowPipeSvg from "../SVG/ElbowPipeSvg";
import FertilizerSvg from "../SVG/FertilizerSvg";
import FlarningUnitSvg from "../SVG/FlarningUnitSvg";
import FlowmeterSvg from "../SVG/FlowmeterSvg";
import GasAnalyzerSvg from "../SVG/GasAnalyzerSvg";
import GasPurifireSvg from "../SVG/GasPurifireSvg";
import GeneratorSvg from "../SVG/GeneratorSvg";
import H2sSensorSvg from "../SVG/H2sSensorSvg";
import IotSystemSvg from "../SVG/IotSystemSvg";
import PhSensorSvg from "../SVG/PhSensorSvg";
import PressureSensorSvg from "../SVG/PressureSensorSvg";
import ScrubberSvg from "../SVG/ScrubberSvg";
import SegregationTableSvg from "../SVG/SegregationTableSvg";
import StorageTankSvg from "../SVG/StorageTankSvg";
import TempSensorSvg from "../SVG/TempSensorSvg";
import TPipeSvg from "../SVG/TPipeSvg";
import ValveSvg from "../SVG/ValveSvg";
import VibrSensorSvg from "../SVG/VibrSensorSvg";
import EditableNode from "../Nodes/EditableNode"; // Assuming you might have a simple icon for this too

// This function remains the same
const onDragStart = (event: React.DragEvent, nodeType: string) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};

// 2. Create a data structure for all your nodes
const nodeOptions = [
  { type: "scruberNode", label: "Scrubber", IconComponent: ScrubberSvg },
  { type: "digesterNode", label: "Digester", IconComponent: DigesterSvg },
  { type: "crusherNode", label: "Crusher", IconComponent: CrusherSvg },
  { type: "valveNode", label: "Valve", IconComponent: ValveSvg },
  {
    type: "ascendingPipeNode",
    label: "Ascending Pipe",
    IconComponent: AscendingPipeSvg,
  },
  { type: "balloonNode", label: "Balloon", IconComponent: BalloonSvg },
  { type: "bioGasNode", label: "BioGas", IconComponent: BioGasSvg },
  {
    type: "digesterAgitatorNode",
    label: "Agitator",
    IconComponent: DigesterAgitatorSvg,
  },
  { type: "dustbinNode", label: "Dustbin", IconComponent: DustbinSvg },
  { type: "elbowPipeNode", label: "Elbow Pipe", IconComponent: ElbowPipeSvg },
  { type: "fertilizerNode", label: "Fertilizer", IconComponent: FertilizerSvg },
  {
    type: "flarningUnitNode",
    label: "Flaring Unit",
    IconComponent: FlarningUnitSvg,
  },
  { type: "flowmeterNode", label: "Flowmeter", IconComponent: FlowmeterSvg },
  {
    type: "gasAnalyzerNode",
    label: "Gas Analyzer",
    IconComponent: GasAnalyzerSvg,
  },
  {
    type: "gasPurifireNode",
    label: "Gas Purifier",
    IconComponent: GasPurifireSvg,
  },
  { type: "generatorNode", label: "Generator", IconComponent: GeneratorSvg },
  { type: "h2sSensorNode", label: "H2S Sensor", IconComponent: H2sSensorSvg },
  { type: "iotSystemNode", label: "IoT System", IconComponent: IotSystemSvg },
  { type: "phSensorNode", label: "pH Sensor", IconComponent: PhSensorSvg },
  {
    type: "pressureSensorNode",
    label: "Pressure Sensor",
    IconComponent: PressureSensorSvg,
  },
  {
    type: "segregationTableNode",
    label: "Segregation Table",
    IconComponent: SegregationTableSvg,
  },
  {
    type: "storageTankNode",
    label: "Storage Tank",
    IconComponent: StorageTankSvg,
  },
  {
    type: "tempSensorNode",
    label: "Temp Sensor",
    IconComponent: TempSensorSvg,
  },
  { type: "tPipeNode", label: "T-Pipe", IconComponent: TPipeSvg },
  {
    type: "vibrSensorNode",
    label: "Vibration Sensor",
    IconComponent: VibrSensorSvg,
  },
  // You can add your non-SVG nodes here as well if they have an icon
  // { type: 'editableNode', label: 'Editable Node', IconComponent: SomeDefaultIcon },
];

const Sidebar = () => {
  return (
    <aside
      style={{
        borderRight: "1px solid #eee",
        padding: "15px 10px",
        background: "#fcfcfc",
        width: "350px", // Widen the sidebar a bit
        overflowY: "auto", // Make it scrollable if there are many nodes
      }}
    >
      <p
        style={{
          textAlign: "center",
          margin: 0,
          marginBottom: "20px",
          color: "#555",
          fontSize: "12px",
        }}
      >
        Drag nodes to the canvas
      </p>

      {/* 3. Map over the array to render each node option */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
        {nodeOptions.map((node) => (
          <div
            key={node.type}
            onDragStart={(event) => onDragStart(event, node.type)}
            draggable
            title={`Drag to add ${node.label}`}
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "grab",
              background: "white",
            }}
          >
            <div
              style={{
                width: "100%",
                // height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <node.IconComponent />
            </div>
            <p
              style={{
                margin: 0,
                marginTop: "5px",
                fontSize: "11px",
                textAlign: "center",
              }}
            >
              {node.label}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
