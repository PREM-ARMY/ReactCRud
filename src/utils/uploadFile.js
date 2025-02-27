import { httpClient } from "./httpClient";
export const uploadFileImage = async (image) => {
    let uploadRes;
    if (image.size < 200000) {
        const formData = new FormData();
        formData.append("file", image);
        uploadRes = await httpClient.post(`admin/uploads`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    } else {
        uploadRes = { message: "Upload an Image less than 200KB" };
    }
    return uploadRes;
};