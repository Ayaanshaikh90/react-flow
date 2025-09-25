"use client";

import React from "react";
import CrusherSvg from "../SVG/CrusherSvg";
import { Handle, Position } from "@xyflow/react";
import HandleLeftSvg from "../SVG/HandleLeftSvg";
import HandleRightSvg from "../SVG/HandleRightSvg";

const CrusherNode = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CrusherSvg />

      <div
        style={{
          position: "absolute",
          right: "-25px",
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
          }}
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
        />
        <HandleLeftSvg />
      </div>
    </div>
  );
};

export default CrusherNode;
