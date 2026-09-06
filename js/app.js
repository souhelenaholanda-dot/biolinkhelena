/* =========================================================
   app.js — navegacao entre telas e montagem do conteudo
   a partir de data/site.js e data/prioridades.js
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- navegacao ---------------- */
  var HOME = 'home';
  var atual = HOME;

  function mostrar(id) {
    document.querySelectorAll('.pg').forEach(function (pg) {
      var ligada = pg.id === id;
      pg.classList.toggle('is-on', ligada);
      pg.hidden = !ligada;
    });
    atual = id;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  window.go = function (id) {
    if (id === atual) return;
    mostrar(id);
    history.pushState({ pg: id }, '', id === HOME ? '#' : '#' + id.replace('page-', ''));
  };

  window.back = function () {
    history.length > 1 ? history.back() : window.go(HOME);
  };

  window.addEventListener('popstate', function (e) {
    mostrar((e.state && e.state.pg) || HOME);
  });

  /* abre direto na subpagina quando a URL ja vem com #ancora */
  function daHash() {
    var h = location.hash.replace('#', '');
    if (!h) return HOME;
    var alvo = 'page-' + h;
    return document.getElementById(alvo) ? alvo : HOME;
  }

  /* ---------------- helpers ---------------- */
  function ico(nome) {
    return '<svg class="ic"><use href="#i-' + nome + '"></use></svg>';
  }

  function el(html) {
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }

  /* ---------------- topo da home ---------------- */
  document.getElementById('hero-cargo').textContent =
    SITE.cargo + ' · ' + SITE.partido + ' · ' + SITE.estado;
  document.getElementById('hero-chamada').textContent = SITE.chamada;

  document.getElementById('legal').innerHTML =
    '<span>' + SITE.eleicao + '</span>' +
    '<strong>' + SITE.nomeCivil + ' &ndash; ' + SITE.cargo + '</strong>' +
    '<span>CNPJ ' + SITE.cnpj + '</span>';

  /* ---------------- links principais ---------------- */
  var LINKS = [
    {
      classe: 'lcard--wa',
      icone: 'whatsapp',
      titulo: 'Falar comigo no WhatsApp',
      desc: SITE.whatsappExibicao,
      href: waLink('Olá, Helena! Vim pelo seu link e quero falar com você.')
    },
    {
      cor: 't-pink',
      icone: 'instagram',
      titulo: 'Instagram',
      desc: '@' + SITE.instagram,
      href: igLink()
    },
    {
      cor: 't-teal',
      icone: 'globe',
      titulo: 'Site oficial da campanha',
      desc: 'Propostas, história e agenda',
      href: SITE.siteOficial
    }
  ];

  var listaLinks = document.getElementById('links');

  LINKS.forEach(function (l) {
    var conteudo =
      '<span class="lcard__ico">' + ico(l.icone) + '</span>' +
      '<span class="lcard__txt">' +
        '<span class="lcard__t">' + l.titulo + '</span>' +
        '<span class="lcard__d">' + l.desc + '</span>' +
      '</span>' +
      '<span class="lcard__seta">' + ico('arrow') + '</span>';

    var classes = 'lcard ' + (l.cor || '') + ' ' + (l.classe || '');
    var no;

    if (l.pagina) {
      no = el('<button class="' + classes + '" type="button">' + conteudo + '</button>');
      no.addEventListener('click', function () { window.go(l.pagina); });
    } else {
      no = el('<a class="' + classes + '" href="' + l.href +
              '" target="_blank" rel="noopener">' + conteudo + '</a>');
    }
    listaLinks.appendChild(no);
  });

  /* ---------------- chips de prioridade na home ---------------- */
  var chips = document.getElementById('chips');

  PRIORIDADES.forEach(function (p) {
    var c = el(
      '<button class="chip t-' + p.cor + '" type="button">' +
        '<span class="chip__ico">' + ico(p.icone) + '</span>' +
        '<span class="chip__t">' + p.titulo + '</span>' +
      '</button>'
    );
    c.addEventListener('click', function () { window.go('page-prioridades'); });
    chips.appendChild(c);
  });

  /* ---------------- pagina de prioridades ---------------- */
  var caixa = document.getElementById('prioridades');

  PRIORIDADES.forEach(function (p) {
    var itens = p.itens.map(function (i) {
      return '<li>' + ico('check') + '<span>' + i + '</span></li>';
    }).join('');

    caixa.appendChild(el(
      '<article class="bloco t-' + p.cor + '">' +
        '<header class="bloco__topo">' +
          '<span class="bloco__ico">' + ico(p.icone) + '</span>' +
          '<span>' +
            '<span class="bloco__t">' + p.titulo + '</span><br>' +
            '<span class="bloco__r">' + p.resumo + '</span>' +
          '</span>' +
        '</header>' +
        '<p>' + p.texto + '</p>' +
        '<ul>' + itens + '</ul>' +
      '</article>'
    ));
  });

  /* ---------------- CTAs das subpaginas ---------------- */
  function ctaWhats(msg) {
    return '<a class="btn btn--wa" href="' + waLink(msg) + '" target="_blank" rel="noopener">' +
           ico('whatsapp') + ' Falar no WhatsApp</a>';
  }

  document.getElementById('cta-sobre').innerHTML =
    ctaWhats('Olá, Helena! Li a sua história e quero conversar.') +
    '<a class="btn btn--ghost" href="' + SITE.siteOficial + '" target="_blank" rel="noopener">' +
    ico('globe') + ' Ver o site completo</a>';

  document.getElementById('cta-prioridades').innerHTML =
    ctaWhats('Olá, Helena! Quero falar sobre uma das suas prioridades.') +
    '<a class="btn btn--ghost" href="' + SITE.siteOficial + '" target="_blank" rel="noopener">' +
    ico('globe') + ' Ver as propostas completas</a>';

  /* ---------------- pagina de contato ---------------- */
  document.getElementById('contato').innerHTML =
    '<div class="contato-lista">' +
      '<a class="lcard lcard--wa" href="' + waLink('Olá, Helena!') + '" target="_blank" rel="noopener">' +
        '<span class="lcard__ico">' + ico('whatsapp') + '</span>' +
        '<span class="lcard__txt"><span class="lcard__t">WhatsApp</span>' +
        '<span class="lcard__d">' + SITE.whatsappExibicao + '</span></span>' +
        '<span class="lcard__seta">' + ico('arrow') + '</span></a>' +
      '<a class="lcard t-pink" href="' + igLink() + '" target="_blank" rel="noopener">' +
        '<span class="lcard__ico">' + ico('instagram') + '</span>' +
        '<span class="lcard__txt"><span class="lcard__t">Instagram</span>' +
        '<span class="lcard__d">@' + SITE.instagram + '</span></span>' +
        '<span class="lcard__seta">' + ico('arrow') + '</span></a>' +
    '</div>' +
    '<p>' + SITE.cidade + ' &middot; ' + SITE.estado + '</p>';

  /* ---------------- botao de compartilhar ---------------- */
  if (navigator.share) {
    var b = el('<button class="btn btn--ghost" type="button" style="margin-top:14px">' +
               ico('share') + ' Compartilhar este link</button>');
    b.addEventListener('click', function () {
      navigator.share({
        title: SITE.nome + ' ' + SITE.numero,
        text: SITE.nome + ' ' + SITE.numero + ' — ' + SITE.slogan,
        url: location.href.split('#')[0]
      }).catch(function () { /* usuario cancelou */ });
    });
    document.querySelector('.destaque').appendChild(b);
  }

  /* ---------------- inicio ---------------- */
  mostrar(daHash());
  history.replaceState({ pg: atual }, '', location.hash || '#');
})();
