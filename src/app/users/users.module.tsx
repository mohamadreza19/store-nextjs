import React, { createContext, useContext, useMemo } from "react";



import UsersFactory from "./users.factory";
import { UsersInjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface UsersModuleState {}

function UsersModule({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => UsersFactory.createInstances(),
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

export const useUsersInjection = (): UsersInjectionEntities =>
  useContext(InjectionContext) as UsersInjectionEntities;

export default UsersModule;

