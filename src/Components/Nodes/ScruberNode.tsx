"use client";

import React from "react";
import ScrubberSvg from "../SVG/ScrubberSvg";
import { Handle, Position } from "@xyflow/react";
import HandleLeftSvg from "../SVG/HandleLeftSvg";
import HandleRightSvg from "../SVG/HandleRightSvg";

const ScruberNode = () => {
  return (
    <div
      style={{
        position: "relative", // important for absolute positioning
        width: "150px", // adjust to match your ScrubberSvg width
        height: "100px", // adjust to match your ScrubberSvg height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrubberSvg />

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
};

export default ScruberNode;
