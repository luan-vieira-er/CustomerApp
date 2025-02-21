export const formatCurrency = (value: string | number) => {
  if (!value) return '';

  const number = Number(value.toString().replace(/\D/g, '')) / 100; // Remove non-numeric chars and divide by 100
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
};
