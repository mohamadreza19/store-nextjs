#!/usr/bin/env node
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const fs = require("fs");
const path = require("path");

// Get the service name from the command line arguments
const [, , serviceName] = process.argv;

if (!serviceName) {
  console.log("Please specify the service name.");
  process.exit(1);
}

// Define the paths
const srcPath = path.join(__dirname, "src", "app");
const serviceFolderPath = path.join(srcPath, serviceName);
const serviceReducerFolderPath = path.join(srcPath, serviceName, "reducers");
const serviceFilePath = path.join(
  serviceFolderPath,
  `${serviceName}.service.ts`
);
const controllerFilePath = path.join(
  serviceFolderPath,
  `${serviceName}.controller.ts`
);
const reduxSlicePath = path.join(
  serviceReducerFolderPath,
  `${serviceName}.slice.ts`
);
const interfacesPath = path.join(serviceFolderPath, `interfaces.ts`);
const apiPath = path.join(serviceFolderPath, `${serviceName}.api.ts`);
const factoryPath = path.join(serviceFolderPath, `${serviceName}.factory.ts`);
const modulePath = path.join(serviceFolderPath, `${serviceName}.module.tsx`);

// Create the service folder inside the src directory
if (!fs.existsSync(serviceFolderPath)) {
  fs.mkdirSync(serviceFolderPath, { recursive: true });
  fs.mkdirSync(serviceReducerFolderPath, { recursive: true });
}

// Service file template
const serviceTemplate = ` class ${capitalizeFirstLetter(
  serviceName
)}Service extends GlobalStoreService  {
  

  // Add service methods here
}
export default ${capitalizeFirstLetter(serviceName)}Service
`;

// Controller file template
const controllerTemplate = `import  ${capitalizeFirstLetter(
  serviceName
)}Service  from './${serviceName}.service';

 class ${capitalizeFirstLetter(serviceName)}Controller {
  constructor(private ${serviceName}Service: ${capitalizeFirstLetter(
  serviceName
)}Service) {
    
  }

  // Add controller methods here
  
}
export default ${capitalizeFirstLetter(serviceName)}Controller;
`;

const reduxSliceTemplate = `import { createSlice } from "@reduxjs/toolkit";
import { ${capitalizeFirstLetter(serviceName)}Response } from "../interfaces";
const initialState:${capitalizeFirstLetter(serviceName)}Response = {
   
  };

const ${serviceName}Slice = createSlice({
  name: "${serviceName}",
  initialState,
  reducers: {
    add(state,action){

    },
    remove(state,action){

    }
  },
});

export const ${serviceName}Actions = ${serviceName}Slice.actions;

export default ${serviceName}Slice.reducer;`;

const intefacesTemplate = `
import ${capitalizeFirstLetter(
  serviceName
)}Service from "./${serviceName}.service";
import ${capitalizeFirstLetter(
  serviceName
)}Controller from "./${serviceName}.controller";
export type ${capitalizeFirstLetter(serviceName)}Response={}

export interface  ${capitalizeFirstLetter(serviceName)}InjectionEntities  {
  ${serviceName}Service:  ${capitalizeFirstLetter(serviceName)}Service;
  ${serviceName}Controller:  ${capitalizeFirstLetter(serviceName)}Controller;
  }
`;
const apiTemplate = `

import { ${capitalizeFirstLetter(serviceName)}Response} from "./interfaces";

class ${capitalizeFirstLetter(serviceName)}ApiService extends ApiService {
  constructor() {
    super("${serviceName}");
  }
  async get${capitalizeFirstLetter(
    serviceName
  )}(): Promise<${capitalizeFirstLetter(serviceName)}Response> {
    const result = await this.$axios.get("/");

    return result.data;
  }
 
}

export default ${capitalizeFirstLetter(serviceName)}ApiService;
`;
const factoryTemplate = `

import ${capitalizeFirstLetter(
  serviceName
)}Service from "./${serviceName}.service";
import ${capitalizeFirstLetter(
  serviceName
)}Controller from "./${serviceName}.controller";
import ${capitalizeFirstLetter(
  serviceName
)}ApiService from "./${serviceName}.api";
import { ${capitalizeFirstLetter(
  serviceName
)}InjectionEntities } from "./interfaces";


class ${capitalizeFirstLetter(serviceName)}Factory implements ModuleFactory {
  static createInstances(): ${capitalizeFirstLetter(
    serviceName
  )}InjectionEntities {
    const ${serviceName}Service = new ${capitalizeFirstLetter(
  serviceName
)}Service();
    const ${serviceName}Controller = new ${capitalizeFirstLetter(
  serviceName
)}Controller(
      ${serviceName}Service,
    );
    return {
      ${serviceName}Service,
      ${serviceName}Controller,
    };
  }
}
export default ${capitalizeFirstLetter(serviceName)}Factory;

`;
const moduleTemplate = `import React, { createContext, useContext, useMemo } from "react";



import ${capitalizeFirstLetter(
  serviceName
)}Factory from "./${serviceName}.factory";
import { ${capitalizeFirstLetter(
  serviceName
)}InjectionEntities } from "./interfaces";

const InjectionContext = createContext({});

interface ${capitalizeFirstLetter(serviceName)}ModuleState {}

function ${capitalizeFirstLetter(
  serviceName
)}Module({children}:{children:React.ReactNode}) {
  const memorizedModlue = useMemo(
    () => ${capitalizeFirstLetter(serviceName)}Factory.createInstances(),
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

export const use${capitalizeFirstLetter(
  serviceName
)}Injection = (): ${capitalizeFirstLetter(serviceName)}InjectionEntities =>
  useContext(InjectionContext) as ${capitalizeFirstLetter(
    serviceName
  )}InjectionEntities;

export default ${capitalizeFirstLetter(serviceName)}Module;

`;
// Write the service and controller files with the templates
fs.writeFileSync(serviceFilePath, serviceTemplate, "utf8");
console.log(`Created service file: ${serviceFilePath}`);

fs.writeFileSync(controllerFilePath, controllerTemplate, "utf8");
console.log(`Created controller file: ${controllerFilePath}`);

fs.writeFileSync(reduxSlicePath, reduxSliceTemplate, "utf8");
console.log(`Created reduxSlice file: ${controllerFilePath}`);
fs.writeFileSync(interfacesPath, intefacesTemplate, "utf8");
console.log(`Created interfaces file: ${interfacesPath}`);

fs.writeFileSync(apiPath, apiTemplate, "utf8");
console.log(`Created api file: ${apiPath}`);

fs.writeFileSync(factoryPath, factoryTemplate, "utf8");
console.log(`Created factory file: ${factoryPath}`);
fs.writeFileSync(modulePath, moduleTemplate, "utf8");
console.log(`Created module file: ${modulePath}`);

console.log(
  `Service and controller files have been created in the folder: ${serviceFolderPath}`
);
