import React, { createContext, useContext, useMemo } from "react";



import AppFactory from "./app.factory";
import { AppInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface AppModuleState {}

function AppModule({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => AppFactory.createInstances(),
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

export const useAppInjection = (): AppInjectionEntities =>
  useContext(InjectionContext) as AppInjectionEntities;

export default AppModule;

