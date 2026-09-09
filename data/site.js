/* =========================================================
   Dados centrais do biolink.
   Tudo que muda com frequencia fica aqui — nao mexa no HTML.
   Itens marcados AJUSTAR ainda precisam do valor definitivo.
   ========================================================= */

const SITE = {
  /* --- identificacao --- */
  nome: 'Helena Holanda',
  primeiroNome: 'Helena',
  nomeCivil: 'Helena Maria Duarte de Holanda',
  numero: '5508',
  cargo: 'Deputada Federal',
  partido: 'PSD',
  estado: 'Paraíba',
  cidade: 'João Pessoa',
  formacao: 'Educadora física',
  slogan: 'sempre fez o bem',
  chamada: 'Pensar no bem coletivo é a minha prioridade.',

  /* --- centro helena holanda --- */
  centro: {
    nome: 'Centro Helena Holanda',
    endereco: 'bairro dos Estados, em João Pessoa – PB',
    mapa: 'https://www.google.com/maps/place/centro+helena+holanda/data=!4m2!3m1!1s0x7acdd43e323db4d:0x3ce09eb907764ffa'
  },

  /* --- contato --- */
  whatsapp: '5583993287247',
  whatsappExibicao: '(83) 99328-7247',
  instagram: 'helenaholandahh',
  email: '',                                   // AJUSTAR: nao informado

  /* --- site oficial --- */
  siteOficial: 'https://helenaholanda5508.com.br',

  /* --- dados legais da propaganda eleitoral --- */
  eleicao: 'Eleição 2026',
  cnpj: '68.491.829/0001-78'
};

/* Monta o link do WhatsApp ja com a mensagem escrita. */
function waLink(msg) {
  const texto = msg ? '?text=' + encodeURIComponent(msg) : '';
  return 'https://wa.me/' + SITE.whatsapp + texto;
}

/* Monta o link do perfil no Instagram. */
function igLink() {
  return 'https://www.instagram.com/' + SITE.instagram + '/';
}
