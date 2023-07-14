/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from "react";
import { useWalls } from "../Context";

export const HUD = () => {
  const [walls] = useWalls();

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "10000",
        background: "white",
      }}
      className="hud"
    >
      <h1>Number of Walls</h1>
      {walls ? <h1>{walls.length}</h1> : <h1>N/A</h1>}
    </div>
  );
};
