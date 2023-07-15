/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { IFCLoader } from "web-ifc-three/IFCLoader";
// import ifcURL from "../../assets/test2.ifc";
import { IFCSPACE } from "web-ifc";
import { useIfcFile, useIfcModel, useWalls } from "../index";
import { IFCWALLSTANDARDCASE as W } from "web-ifc";

//

export const IFC = () => {
  const [model, setModel] = useIfcModel();
  const [file] = useIfcFile();
  const [walls, setWalls] = useWalls();

  const ifcLoader = useMemo(() => new IFCLoader(), []);

  useEffect(() => {
    if (!file || file.type !== "ifc") return;

    (async function () {
      await ifcLoader.ifcManager.parser.setupOptionalCategories({
        [IFCSPACE]: false,
      });

      await ifcLoader.ifcManager.applyWebIfcConfig({
        USE_FAST_BOOLS: true,
      });

      ifcLoader.load(file.url, async function (mesh) {
        setModel(mesh);
        const walls = await ifcLoader.ifcManager.getAllItemsOfType(
          mesh.modelID,
          W,
          false
        );
        setWalls(walls);
      });
    })();
  }, [ifcLoader, file]);

  return <>{model && <primitive object={model} />}</>;
};
