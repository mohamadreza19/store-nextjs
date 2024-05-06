import { ReactNode, useMemo } from "react";
import { ModuleProps } from "../shared/interfaces";

type ComponentFunction = (props: ModuleProps) => JSX.Element;

interface ModulesImporterProps {
  Modules: ComponentFunction[];
  children: ReactNode;
}

function ModulesImporter({ Modules, children }: ModulesImporterProps) {
  // Iterate over each module in reverse order

  let result = children;

  for (let i = Modules.length - 1; i >= 0; i--) {
    const Module = Modules[i];

    // Render the module's component around the children
    result = Module({
      children: result,
      renderSharedUi: i === Modules.length - 1 ? true : false,
    });
  }

  return <>{result}</>;
}

export default ModulesImporter;
