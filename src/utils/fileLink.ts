export const getFileLink = (fileObj: FileList) => {
  const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
  return file;
};
