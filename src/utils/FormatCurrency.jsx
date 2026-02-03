'use client'
export default function formatCurrency (value){
  // Remove tudo que não for dígito.
  const digits = value.replace(/\D/g, '');

  // Se não houver dígitos, retorna uma string vazia.
  if (!digits) {
    return "";
  }

  // Converte os dígitos para um número, tratando-os como centavos.
  const numericValue = Number(digits) / 100;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericValue);
};