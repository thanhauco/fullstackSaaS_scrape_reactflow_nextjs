import ReactFlow from "react-flow-renderer";

export default function WorkflowEditor() {
  const initialElements = [
    { id: "1", type: "input", data: { label: "Start Node" }, position: { x: 250, y: 0 } },
    { id: "2", data: { label: "Middle Node" }, position: { x: 250, y: 150 } },
    { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
  ];

  return (
    <div style={{ height: 500 }}>
      <ReactFlow elements={initialElements} />
    </div>
  );
}