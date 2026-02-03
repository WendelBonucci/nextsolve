import React from 'react';

export default function ClickableMessage({ text }) {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;

  // Se não houver e-mail no texto, retorna o texto simples sem processamento.
  if (!emailRegex.test(text)) {
    return <span>{text}</span>;
  }

  const parts = text.split(emailRegex);
  const matches = text.match(emailRegex);

  return (
    <span>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {matches && matches[index] && (
            <a href={`mailto:${matches[index]}`} className="text-blue-600 underline">
              {matches[index]}
            </a>
          )}
        </React.Fragment>
      ))}
    </span>
  );
}