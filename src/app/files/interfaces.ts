import FilesService from "./files.service";
import FilesController from "./files.controller";
export type FilesResponse = {};
export type UploadFiles = {
  file: File;
  entityType: "product" | "user";
  entityId: string;
};

export interface FilesInjectionEntities {
  filesService: FilesService;
  filesController: FilesController;
}
