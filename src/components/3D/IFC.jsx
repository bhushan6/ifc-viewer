/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { IFCLoader } from "web-ifc-three/IFCLoader";
// import ifcURL from "../../assets/test2.ifc";
import { IFCSPACE } from "web-ifc";
import { useIfcFile, useIfcModel } from "../index";

export const IFC = () => {
  const [model, setModel] = useIfcModel();
  const [file] = useIfcFile();

  const ifcLoader = useMemo(() => new IFCLoader(), []);

  useEffect(() => {
    if (!file) return;

    (async function () {
      await ifcLoader.ifcManager.parser.setupOptionalCategories({
        [IFCSPACE]: false,
      });

      await ifcLoader.ifcManager.applyWebIfcConfig({
        USE_FAST_BOOLS: true,
      });

      ifcLoader.load(file, function (mesh) {
        setModel(mesh);
      });
    })();
  }, [ifcLoader, file]);

  return <>{model && <primitive object={model} />}</>;
};
