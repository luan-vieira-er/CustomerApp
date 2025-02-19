import { IDocumentDownloadResponse } from 'types';

export const generateDownloadElement = (result: IDocumentDownloadResponse) => {
  const linkSource = `data:${result.MimeType};base64,${result.Base64Content}`;
  const downloadLink = document.createElement('a');
  downloadLink.href = linkSource;
  downloadLink.download = result.FileName;
  downloadLink.click();
};

export const generateDownloadElementFromUrl = (
  url: string,
  fileName: string,
) => {
  const linkSource = url;
  const downloadLink = document.createElement('a');
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};