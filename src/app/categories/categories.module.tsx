import React, { createContext, useContext, useMemo } from "react";



import CategoriesFactory from "./categories.factory";
import { CategoriesInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface CategoriesModuleState {}

function CategoriesModule({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => CategoriesFactory.createInstances(),
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

export const useCategoriesInjection = (): CategoriesInjectionEntities =>
  useContext(InjectionContext) as CategoriesInjectionEntities;

export default CategoriesModule;

