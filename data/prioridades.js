/* =========================================================
   As bandeiras da campanha, na ordem em que aparecem.
   `cor` usa os tokens definidos em css/main.css.
   ========================================================= */

const PRIORIDADES = [
  {
    id: 'autista',
    cor: 'pink',
    icone: 'puzzle',
    titulo: 'Amor pela causa autista',
    resumo: 'O autismo me ensinou que amar é acolher.',
    texto: 'Trabalho com pessoas que precisam de atenção especial há mais de cinco décadas. ' +
           'A família que recebe um diagnóstico entra numa corrida contra o tempo — e quase ' +
           'sempre corre sozinha. Meu compromisso é encurtar essa corrida.',
    itens: [
      'Diagnóstico sem espera na rede pública',
      'Terapia multidisciplinar contínua pelo SUS',
      'Escola preparada, com profissional de apoio suficiente',
      'Acolhimento e apoio a mães, pais e cuidadores',
      'CIPTEA respeitada em qualquer serviço do país'
    ]
  },
  {
    id: 'neuro',
    cor: 'orange',
    icone: 'infinity',
    titulo: 'Inclusão de neurodivergentes',
    resumo: 'Quem precisa se adaptar é a sociedade, não a pessoa.',
    texto: 'TDAH, dislexia, altas habilidades, autismo: formas diferentes de aprender e ' +
           'produzir. E há um problema que quase ninguém discute — o apoio costuma acabar ' +
           'quando a pessoa completa 18 anos.',
    itens: [
      'Diagnóstico e acompanhamento também na vida adulta',
      'Material, prazos e avaliações adaptados',
      'Emprego com apoio e acompanhamento inicial',
      'Ambientes de baixo estímulo nos serviços públicos',
      'Enfrentamento permanente ao capacitismo'
    ]
  },
  {
    id: 'pcd',
    cor: 'teal',
    icone: 'wheelchair',
    titulo: 'Respeito aos PCDs',
    resumo: 'Acessibilidade não é favor: é direito garantido em lei.',
    texto: 'Fundei o Centro Helena Holanda para oferecer reabilitação a quem não tinha para ' +
           'onde ir, coordenei a política municipal da pessoa com deficiência e levei a pauta ' +
           'para a Câmara. A lei existe; o que falta é fiscalização.',
    itens: [
      'Fiscalização real de calçadas, prédios e transporte',
      'Frota adaptada e passe livre sem burocracia',
      'Lei de cotas cumprida e qualificação profissional',
      'Reabilitação, órteses e próteses sem fila',
      'Tecnologia assistiva ao alcance de quem precisa'
    ]
  },
  {
    id: 'idosos',
    cor: 'purple',
    icone: 'elderly',
    titulo: 'Dignidade aos idosos',
    resumo: 'Quem construiu este país merece envelhecer com respeito.',
    texto: 'Convivendo todo dia com os idosos atendidos no Centro, entendi que a maior queixa ' +
           'quase nunca é a doença: é a solidão e a sensação de terem virado um estorvo.',
    itens: [
      'Saúde geriátrica e atendimento domiciliar no SUS',
      'Resposta rápida contra maus-tratos e abandono',
      'Centros de convivência contra o isolamento',
      'Renda protegida de descontos indevidos e golpes',
      'Cidade acessível, com atendimento preferencial de fato'
    ]
  }
];
