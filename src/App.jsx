/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "./App.css";
import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import {
  FileUpload,
  HUD,
  IFC,
  Lights,
  PostProcessing,
} from "./components/index";

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
      <Canvas
        gl={{ antialias: false }}
        camera={{ fov: 45, position: [0, 0, 10] }}
        frameloop="demand"
      >
        <color attach="background" args={["#222"]} />
        <React.Suspense fallback={null}>
          <gridHelper args={[1500, 100]} position={[0, -0.5, 0]} />
          <IFC />
          <Lights />
          <PostProcessing />
          {/* <Stats /> */}
        </React.Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
