import FilesService from "./files.service";
import FilesController from "./files.controller";
import FilesApiService from "./files.api";
import { FilesInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class FilesFactory implements ModuleFactory {
  static createInstances(): FilesInjectionEntities {
    const filesService = new FilesService();
    const filesController = new FilesController(filesService);
    return {
      filesService,
      filesController,
    };
  }
}
export default FilesFactory;
