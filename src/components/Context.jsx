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

const IfcFileCtx = createContext(null);

const IfcFileContext = ({ children }) => {
  const ifcFileState = useState(null);

  return (
    <IfcFileCtx.Provider value={ifcFileState}>{children}</IfcFileCtx.Provider>
  );
};

export const useIfcFile = () => useContext(IfcFileCtx);

export const Context = ({ children }) => {
  return (
    <>
      <IfcFileContext>
        <IfcModelContext>{children}</IfcModelContext>
      </IfcFileContext>
    </>
  );
};
