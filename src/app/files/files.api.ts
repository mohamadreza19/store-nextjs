import ApiService from "../lib/services/api/ApiService";
import { FilesResponse, UploadFiles } from "./interfaces";

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
}

export default FilesApiService;
