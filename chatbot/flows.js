/* =========================================================
   Os fluxos da assistente.

   A Lena e proposital e deliberadamente simples: ela so passa
   o contato da Helena e diz onde fica o Centro Helena Holanda.
   Qualquer outro assunto ela encaminha para o WhatsApp.

   Formato de cada fluxo:
   {
     msg: 'texto (aceita HTML)',
     chips: [
       { l: 'Rotulo', f: 'id_do_fluxo' }   -> vai para outro fluxo
       { l: 'Rotulo', wa: 'mensagem' }     -> abre o WhatsApp
       { l: 'Rotulo', url: 'https://...' } -> abre um link externo
     ]
   }
   ========================================================= */

const FLUXOS = {

  /* ---------------- menu principal ---------------- */
  inicio: {
    msg: 'Posso te ajudar com duas coisas por aqui. O que você precisa?',
    chips: [
      { l: '📱 Contato da Helena', f: 'contato' },
      { l: '📍 Onde fica o Centro', f: 'centro' }
    ]
  },

  /* ---------------- contato ---------------- */
  contato: {
    msg: 'O número da Helena é <strong>' + SITE.whatsappExibicao + '</strong>. ' +
         'É o mesmo do WhatsApp — pode chamar por lá que a equipe responde, ' +
         'e a Helena lê pessoalmente sempre que consegue. 💬',
    chips: [
      { l: '💬 Abrir o WhatsApp', wa: 'Olá, Helena! Vim pelo seu link e quero falar com você.' },
      { l: '📷 Instagram', url: igLink() },
      { l: '📍 Onde fica o Centro', f: 'centro' }
    ]
  },

  /* ---------------- centro helena holanda ---------------- */
  centro: {
    msg: 'O <strong>' + SITE.centro.nome + '</strong> fica no ' +
         '<strong>' + SITE.centro.endereco + '</strong>. ' +
         'É lá que a Helena atende há mais de vinte anos. ' +
         'Toque no mapa que abre a rota direto no Google Maps. 🗺️',
    chips: [
      { l: '🗺️ Abrir no Google Maps', url: SITE.centro.mapa },
      { l: '💬 Confirmar horário no WhatsApp', wa: 'Olá! Vim pelo link da Helena e queria saber os horários de atendimento do Centro Helena Holanda.' },
      { l: '📱 Contato da Helena', f: 'contato' }
    ]
  }

};
