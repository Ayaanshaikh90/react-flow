// CustomEdge.tsx (or WideEdge.tsx)
import React from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath, // Changed back to getSmoothStepPath
  EdgeProps,
} from "@xyflow/react";

const WideEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  label,
}: EdgeProps) => {
  // --- 1. Define the visual properties ---
  const casingStrokeWidth = 20;
  const beltStrokeWidth = 10;

  // --- 2. Manually extend the path to close the gap ---
  const extension = casingStrokeWidth / 2;
  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const length = Math.sqrt(dx * dx + dy * dy);
  const ux = length === 0 ? 0 : dx / length;
  const uy = length === 0 ? 0 : dy / length;
  const extendedSourceX = sourceX - ux * extension;
  const extendedSourceY = sourceY - uy * extension;
  const extendedTargetX = targetX + ux * extension;
  const extendedTargetY = targetY + uy * extension;

  // --- 3. Generate the path using getSmoothStepPath for right-angled turns ---
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    // This function creates the step-style path
    sourceX: extendedSourceX,
    sourceY: extendedSourceY,
    sourcePosition,
    targetX: extendedTargetX,
    targetY: extendedTargetY,
    targetPosition,
  });

  return (
    <>
      {/* The three layers for the conveyor belt rendering remain the same */}
      <BaseEdge
        id={`${id}-casing`}
        path={edgePath}
        style={{
          stroke: "#b1b1b7",
          strokeWidth: casingStrokeWidth,
          strokeDasharray: "none",
        }}
      />
      <BaseEdge
        id={`${id}-black-base`}
        path={edgePath}
        style={{
          stroke: "#000000",
          strokeWidth: beltStrokeWidth,
          strokeDasharray: "none",
        }}
      />
      <BaseEdge
        id={`${id}-green-dashes`}
        path={edgePath}
        style={{
          stroke: "green",
          strokeWidth: beltStrokeWidth,
          strokeDasharray: "10 10",
        }}
      />

      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 12,
              color: "black",
              background: "white",
              padding: "2px 5px",
              borderRadius: 4,
              border: "1px solid #b1b1b7",
              zIndex: 100,
            }}
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

export default WideEdge;
