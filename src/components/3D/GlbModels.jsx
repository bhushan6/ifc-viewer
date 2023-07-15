/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import { useGlbModels, useIfcFile } from "../Context";
import { useThree } from "@react-three/fiber";
import { TransformControls, useGLTF } from "@react-three/drei";

function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);

  return `${timestamp}-${randomNum}`;
}

const GlbModel = ({ url, position }) => {
  const { controls } = useThree();

  const { scene } = useGLTF(url);

  const transform = useRef();

  useEffect(() => {
    if (transform.current) {
      const tControls = transform.current;
      tControls.setMode("translate");
      const callback = (event) => (controls.enabled = !event.value);
      tControls.addEventListener("dragging-changed", callback);
      return () => tControls.removeEventListener("dragging-changed", callback);
    }
  }, [controls]);

  return (
    <>
      <TransformControls position={position}>
        <primitive object={scene} />
      </TransformControls>
    </>
  );
};

export const GlbModels = () => {
  const [file] = useIfcFile();
  const [glbModels, setGlbModels] = useGlbModels();

  const { camera } = useThree();

  useEffect(() => {
    if (!file || (file.type !== "glb" && file.type !== "gltf")) return;

    const frustumHeight =
      2 * Math.tan((camera.fov * Math.PI) / 180 / 2) * camera.position.z;
    const frustumWidth = frustumHeight * camera.aspect;

    const x = Math.random() * (frustumWidth - -frustumWidth) + -frustumWidth;
    const z = -Math.random() * camera.position.z;

    const glbURL = file.url;
    const key = generateUniqueId();

    const position = [x, 0, z];

    setGlbModels((glbModels) => [...glbModels, { url: glbURL, key, position }]);
  }, [file, camera]);

  return (
    <>
      {glbModels.map((model) => {
        // eslint-disable-next-line react/jsx-key
        return <GlbModel {...model} />;
      })}
    </>
  );
};
