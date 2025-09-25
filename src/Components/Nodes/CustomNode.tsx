import React from "react";
import DustbinSvg from "../SVG/DustbinSvg";

const CustomNode = ({ data }: any) => {
  return (
    <>
      <div
        style={{
          // backgroundColor: "white",
          color: "#ffffff",
          border: "2px solid black",
          borderRadius: "10px",
          fontSize: "20px",
          fontWeight: "500",
          padding: "10px",
          resize: "both",
          overflow: "auto",
          minWidth: 100,
          minHeight: 50,
        }}
        className="bg-pink-500"
      >
        {data.label ?? "Node"}
      </div>
    </>
  );
};

export default CustomNode;
