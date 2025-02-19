import moment from 'moment';

export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const cnpjMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const cpfOrCnpjMask = (value: string) => {
  return value.length <= 11 ? cpfMask(value) : cnpjMask(value);
};

export const pisMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{5})(\d)/, '$1.$2.$3')
    .replace(/(\d{3})\.(\d{5})\.(\d{2})(\d)/, '$1.$2.$3-$4');
};

export const cepMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
};

export const currencyMask = (value: number) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export const moneyMask = (value: number) => {
  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
};

export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1');
};

export const accountDigitMask = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{6})(\d)/, '$1-$2');
};

export const formatDateFromApi = (value: string) => {
  return moment(value).format('DD/MM/YYYY');
};

export const formatDateAndTimeFromApi = (value: string) => {
  return moment(value).format('DD/MM/YYYY - HH:mm');
};

export const formatDateFromApiToCalendar = (value: string) => {
  return moment(value).format('YYYY-MM-DD');
};

export const formatDateToApi = (value: string) => {
  return moment(value).toISOString();
};

export const onlyNumbers = (value: string) => {
  return value.replace(/\D/g, '');
};

export const onlyLetters = (value: string) => {
  return value.replace(/^[0-9 _ ,]*$/, '');
};

export const toUpperCase = (value: string) => {
  return value.toUpperCase().replace(/^[0-9 _ ,]*$/, '');
};

export const createRequiredMessage = (value: string) => {
  return `${value} é um campo obrigatório.`;
};

export const currencyToNumber = (value: string) => {
  const newValue = value.replaceAll('.', '').replaceAll(',', '.');
  return Number(newValue);
};
