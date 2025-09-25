import { Handle, Position } from "@xyflow/react";

export default function TankNode({ data }: any) {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "8px",
        background: data.level > 70 ? "red" : "lightblue",
        textAlign: "center",
        width: 120,
        position: "relative",
      }}
    >
      <strong>Tank</strong>
      <p>Level: {Math.round(data.level)}%</p>

      <Handle
        type="target"
        position={Position.Top}
        id="tank-in"
        style={{
          background: "#2563eb",
          width: 14,
          height: 14,
          borderRadius: "50%",
          border: "2px solid white",
        }}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="tank-out"
        style={{
          background: "#16a34a",
          width: 14,
          height: 14,
          borderRadius: "50%",
          border: "2px solid white",
        }}
      />
    </div>
  );
}
