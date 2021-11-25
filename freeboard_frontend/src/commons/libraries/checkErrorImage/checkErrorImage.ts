import { Modal } from "antd";

export function checkValidationImage(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "jpeg, png 파일만 업로드 가능합니다.",
    });
    return false;
  }
  return file;
}
