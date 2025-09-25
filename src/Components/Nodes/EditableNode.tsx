import React from "react";
import { Handle, Position, NodeProps, useReactFlow } from "@xyflow/react";
import HandleRightSvg from "../SVG/HandleRightSvg";
import HandleLeftSvg from "../SVG/HandleLeftSvg";

export default function EditableNode({
  id,
  data,
  selected,
  dragging,
  xPos,
  yPos,
}: NodeProps) {
  const { setNodes } = useReactFlow();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, label: value } }
          : node
      )
    );
  };

  return (
    <div
      style={{
        padding: 10,
        border: selected ? "2px solid blue" : "2px solid #333",
        borderRadius: 8,
        background: dragging ? "#fef08a" : "#e9f5db",
        minWidth: 150,
        position: "relative", // important for absolute positioning
        textAlign: "center",
        boxShadow: selected ? "30px 30px 8px rgba(255,255,255,0.5)" : "none",
        resize: "both",
        height: "100%",
      }}
    >
      <p style={{ fontSize: 12, marginBottom: 4 }}>
        Pos: {Math.round(xPos || 0)}, {Math.round(yPos || 0)}
      </p>

      <input
        value={data.label}
        onChange={onChange}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          textAlign: "center",
          fontWeight: "bold",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-25px", // push outside the node
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Handle
          type="source"
          position={Position.Right}
          id="out"
          style={{
            opacity: 0,
            padding: "13px 3px",
            height: "10px",
            borderRadius: "0",
          }} // invisible but still works
        />
        <HandleRightSvg />
      </div>

      <div
        style={{
          position: "absolute",
          left: "-24px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Handle
          type="target"
          position={Position.Left}
          id="in"
          style={{
            opacity: 0,
            padding: "13px 3px",
            height: "10px",
            borderRadius: "0",
          }}
          className="absolute"
        />
        <HandleLeftSvg />
      </div>
    </div>
  );
}
