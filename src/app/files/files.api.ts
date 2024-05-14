import ApiService from "../lib/services/api/ApiService";
import { deleteFile, FilesResponse, UploadFiles } from "./interfaces";

class FilesApiService extends ApiService {
  constructor() {
    super("files");
  }
  async uploadFile(body: UploadFiles): Promise<undefined> {
    const formData = new FormData();

    for (const key in body) {
      formData.append(key, body[key as keyof typeof body]);
    }

    const result = await this.$axios.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return result.data;
  }
  async deleteFile(values: deleteFile) {
    const { entityId, entityType, fileId } = values;
    await this.$axios.delete("/" + fileId, {
      data: {
        entityId,
        entityType,
      },
    });
  }
}

export default FilesApiService;
