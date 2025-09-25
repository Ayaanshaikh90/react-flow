"use client";
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "@xyflow/react";

export default function PipeEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  label,
}: any) {
  // Create a bezier path (you can also use getStraightPath if you prefer)
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,  
    targetX,
    targetY,
  });

  return (
    <>
      {/* Pipe-looking edge */}
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#0f172a", // dark pipe color
          strokeWidth: 6,
        }}
      />
      {/* Pipe outline (lighter inner line for 3D effect) */}
      <BaseEdge
        id={`${id}-inner`}
        path={edgePath}
        style={{
          stroke: "#38bdf8", // cyan inner
          strokeWidth: 4,
        }}
        className=""
      />

      {/* Label */}
      {label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              background: "black",
              padding: "2px 6px",
              borderRadius: "6px",
              fontSize: 12,
              fontWeight: "500",
              border: "1px solid #94a3b8",
              color: "#0f172a",
              pointerEvents: "all",
            }}
            className="nodrag nopan "
          >
            {/* {label} */}
            hello
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
