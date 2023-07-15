/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const IfcModelCtx = createContext(null);

const IfcModelContext = ({ children }) => {
  const ifcModelState = useState(null);

  return (
    <IfcModelCtx.Provider value={ifcModelState}>
      {children}
    </IfcModelCtx.Provider>
  );
};

export const useIfcModel = () => useContext(IfcModelCtx);

const glbModelCtx = createContext(null);

const GlbModelContext = ({ children }) => {
  const glbModelState = useState([]);

  return (
    <glbModelCtx.Provider value={glbModelState}>
      {children}
    </glbModelCtx.Provider>
  );
};

export const useGlbModels = () => useContext(glbModelCtx);

const IfcFileCtx = createContext(null);

const IfcFileContext = ({ children }) => {
  const ifcFileState = useState(null);

  return (
    <IfcFileCtx.Provider value={ifcFileState}>{children}</IfcFileCtx.Provider>
  );
};

export const useIfcFile = () => useContext(IfcFileCtx);

const LoadingCtx = createContext(null);

const LoadingContext = ({ children }) => {
  const loadingState = useState(null);

  return (
    <LoadingCtx.Provider value={loadingState}>{children}</LoadingCtx.Provider>
  );
};

export const useLoading = () => useContext(LoadingCtx);

const NumberOfWallsCtx = createContext(null);

const NumberOfWallsContext = ({ children }) => {
  const numberOfWallsState = useState();

  return (
    <NumberOfWallsCtx.Provider value={numberOfWallsState}>
      {children}
    </NumberOfWallsCtx.Provider>
  );
};

export const useWalls = () => useContext(NumberOfWallsCtx);

export const Context = ({ children }) => {
  return (
    <>
      <LoadingContext>
        <IfcFileContext>
          <NumberOfWallsContext>
            <IfcModelContext>
              <GlbModelContext>{children}</GlbModelContext>
            </IfcModelContext>
          </NumberOfWallsContext>
        </IfcFileContext>
      </LoadingContext>
    </>
  );
};
