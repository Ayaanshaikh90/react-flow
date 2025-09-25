import React from "react";
import { Handle, NodeProps, Position } from "@xyflow/react";
import DustbinSvg from "../SVG/DustbinSvg";
import HandleSvg from "../SVG/HandleRightSvg";
import HandleRightSvg from "../SVG/HandleRightSvg";
import HandleLeftSvg from "../SVG/HandleLeftSvg";

export default function DustbinNode({}: NodeProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: 4,
        background: "#fefefe",
        resize: "both",
        height: "100%",
        width: "100%",
      }}
    >
      <div>
        <Handle
          type="source"
          position={Position.Right}
          id="input"
          style={{ opacity: 0, background: "#555" }}
        />
        <HandleRightSvg />
      </div>

      <DustbinSvg width="50" height="100%" />

      <div>
        <Handle
          type="target"
          position={Position.Left}
          id="input"
          style={{ opacity: 0, background: "#555" }}
        />
        <HandleLeftSvg />
      </div>
    </div>
  );
}
