export const brlMask = (value: string) => {
  const newCurrency = Number(value.replace(/\D/g, ''));
  return (newCurrency / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
};
