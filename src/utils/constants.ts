import { IListItem } from 'types';

export const NAV_WIDTH_DEFAULT = '220px';
export const NAV_WIDTH_MOBILE_CLOSE = '0';
export const NAV_WIDTH_OPENED = '220px';
export const NAV_BOTTOM_HEIGHT = '72px';
export const HEADER_HEIGTH_DEFAULT = '56px';
export const BACK_BUTTON_HEIGHT = 30;
export const BACK_BUTTON_WIDTH = 80;
export const SUBMIT_BUTTON_WIDTH = 210;
export const TABLE_ROWS_SIZE = 25;
export const DEFAULT_TIMER_RESEND_CODE = 60;
export const COMPLETE_TOKEN_LENGTH = 6;
export const DEFAULT_CODE_LENGHT = 6;
export const DEFAULT_CODE_TIMER = 60;
export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 15;
export const DEFAULT_PAGE_SIZE = 10;
export const REGEX_PASSWORD =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#%*$?])[A-Za-z\d!@#%*$?]{1,}$/;
export const MAX_FILE_SIZE = 25;
export const PHOTO_EXTENSIONS = {
  image: ['.jpg', '.gif', '.png', '.jpeg', '.webp'],
};
export const PHOTO_TYPES = {
  image: ['image/jpg', 'image/gif', 'image/png', 'image/jpeg', 'image/webp'],
};
export const FILE_EXTENSIONS = {
  all: [
    '.jpg',
    '.gif',
    '.png',
    '.jpeg',
    '.webp',
    '.pdf',
    '.docx',
    '.doc',
    '.mp4',
    '.mpeg',
    '.webm',
  ],
};
export const FILE_TYPES = {
  all: [
    'image/jpg',
    'image/gif',
    'image/png',
    'image/jpeg',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'video/mp4',
    'video/mpeg',
    'video/webm',
  ],
};