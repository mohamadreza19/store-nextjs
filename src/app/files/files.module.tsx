import React, { createContext, useContext, useMemo } from "react";



import FilesFactory from "./files.factory";
import { FilesInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface FilesModuleState {}

function FilesModule({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => FilesFactory.createInstances(),
    []
  );


  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main
      
      >
       
       
          {children}
        
      </main>
    </InjectionContext.Provider>
  );
}

export const useFilesInjection = (): FilesInjectionEntities =>
  useContext(InjectionContext) as FilesInjectionEntities;

export default FilesModule;

