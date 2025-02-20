import { MAX_FILE_SIZE, FILE_EXTENSIONS, FILE_TYPES } from '../utils/constants';
import { createRequiredMessage } from '../utils/mask';
import { validateFileSize, validateFileType } from '../utils/validators';
import * as Yup from 'yup';

export const attachmentSchemaValidation = Yup.object({
  Id: Yup.number().nullable(),
  AttachmentType: Yup.number()
    .moreThan(0, 'Selecione o tipo de anexo.')
    .required(createRequiredMessage('Tipo de anexo')),
  Attachment: Yup.mixed<any>()
    .required(createRequiredMessage('Anexo'))
    .test(
      'fileSize',
      `O arquivo deve ter no máximo ${MAX_FILE_SIZE}mb`,
      (value) => validateFileSize(value, MAX_FILE_SIZE),
    )
    .test(
      'fileExtension',
      `O arquivo deve ser nos seguintes formatos: ${FILE_EXTENSIONS.all}`,
      (value) => validateFileType(value, FILE_TYPES.all),
    ),
});
