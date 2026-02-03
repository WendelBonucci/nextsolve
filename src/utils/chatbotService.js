export async function getOpenRouterResponse(prompt = '') {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (data.error) {
      return 'Erro: ' + data.error;
    }

    if (data.content) {
      return data.content.trim();
    }

    return 'Desculpe, tive um problema para processar sua resposta. Tente novamente.';
  } catch (error) {
    console.error('Erro de rede:', error);
    return 'Ocorreu um erro de rede. Por favor, verifique sua conexão.';
  }
}
