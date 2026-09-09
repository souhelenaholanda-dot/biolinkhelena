/* =========================================================
   engine.js — motor da assistente.
   Depende de: data/site.js, chatbot/config.js, chatbot/flows.js
   ========================================================= */
(function () {
  'use strict';

  var area;                 /* <div id="chat-area">      */
  var comecou = false;      /* evita reiniciar a conversa */

  function avatar() {
    return '<span class="bal__ava">' + CHAT.nome.charAt(0) + '</span>';
  }

  function el(html) {
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstElementChild;
  }

  /* mantem a ultima mensagem visivel sem pular a pagina toda */
  function acompanhar(no) {
    no.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  /* ---------------- chips de resposta rapida ---------------- */
  function mostrarChips(chips) {
    var caixa = document.createElement('div');
    caixa.className = 'chat-chips';

    chips.forEach(function (c) {
      var no;

      if (c.wa || c.url) {
        no = el('<a class="chat-chip ' + (c.wa ? 'chat-chip--wa' : '') + '" href="' +
                (c.wa ? waLink(c.wa) : c.url) +
                '" target="_blank" rel="noopener">' + c.l + '</a>');
      } else {
        no = el('<button class="chat-chip" type="button">' + c.l + '</button>');
        no.addEventListener('click', function () { irPara(c.f, c.l); });
      }

      caixa.appendChild(no);
    });

    /* atalho de volta ao menu, exceto quando ja estamos nele */
    if (!chips.some(function (c) { return c.f === 'inicio'; })) {
      var voltar = el('<button class="chat-chip chat-chip--voltar" type="button">↩ Voltar ao início</button>');
      voltar.addEventListener('click', function () { irPara('inicio', 'Voltar ao início'); });
      caixa.appendChild(voltar);
    }

    area.appendChild(caixa);
    acompanhar(caixa);
  }

  /* desliga os chips ja usados para nao confundir */
  function apagarChips() {
    area.querySelectorAll('.chat-chips').forEach(function (c) {
      c.classList.add('is-off');
    });
  }

  /* ---------------- mensagens ---------------- */
  function falaUsuario(texto) {
    var no = el('<div class="bal bal--eu"></div>');
    no.textContent = texto;
    area.appendChild(no);
    acompanhar(no);
  }

  function falaLena(html, chips) {
    var digitando = el(
      '<div class="bal bal--lena bal--digitando">' + avatar() +
      '<span></span><span></span><span></span></div>'
    );
    area.appendChild(digitando);
    acompanhar(digitando);

    setTimeout(function () {
      digitando.remove();

      var no = el('<div class="bal bal--lena"><span class="bal__txt"></span></div>');
      no.querySelector('.bal__txt').innerHTML = html;
      area.appendChild(no);
      acompanhar(no);

      if (chips) mostrarChips(chips);
    }, CHAT.digitandoMin + Math.random() * CHAT.digitandoExtra);
  }

  /* ---------------- navegacao entre fluxos ---------------- */
  function irPara(id, rotulo) {
    var f = FLUXOS[id];
    if (!f) return;
    apagarChips();
    if (rotulo) falaUsuario(rotulo);
    falaLena(f.msg, f.chips);
  }

  /* ---------------- inicio da conversa ---------------- */
  window.iniciarChat = function () {
    if (comecou) return;
    comecou = true;

    area = document.getElementById('chat-area');

    falaLena(
      'Oi! Eu sou a <strong>' + CHAT.nome + '</strong>, ' +
      'a assistente virtual da <strong>' + SITE.nome + ' ' + SITE.numero + '</strong>. 👋<br><br>' +
      'Sou bem direta: passo o contato dela e digo onde fica o Centro Helena Holanda. ' +
      'Para o resto, é só chamar no WhatsApp.',
      FLUXOS.inicio.chips
    );
  };
})();
