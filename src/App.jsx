/* eslint-disable react/no-unknown-property */
import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FileUpload, HUD, IFC, Lights } from "./components/index";

function App() {
  return (
    <>
      <FileUpload
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 10000,
          margin: "20px",
        }}
      />
      <HUD />
      <Canvas camera={{ fov: 45, position: [0, 0, 10] }}>
        <color attach="background" args={["#222"]} />
        <React.Suspense fallback={null}>
          <gridHelper args={[1500, 100]} position={[0, -0.5, 0]} />
          <IFC />
          <Lights />
        </React.Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
