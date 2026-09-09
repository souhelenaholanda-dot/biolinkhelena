# Biolink — Helena Holanda 5508

Página de links para a bio do Instagram. HTML, CSS e JavaScript puros,
sem build e sem dependências. Funciona como SPA: as subpáginas trocam
por JavaScript, sem recarregar.

## Rodar

Abra o `index.html`. Para testar com servidor local:

```bash
python -m http.server 8000
```

## Estrutura

```
index.html            telas + sprite SVG dos ícones
css/main.css          tokens, reset, marca, botões
css/home.css          tela inicial
css/pages.css         subpáginas
css/chat.css          tela da assistente
js/app.js             navegação e montagem do conteúdo
data/site.js          contatos, Centro e dados legais  ← mexa aqui
data/prioridades.js   as 4 bandeiras                   ← e aqui
chatbot/config.js     nome e ritmo da assistente
chatbot/flows.js      as respostas da assistente       ← e aqui
chatbot/engine.js     motor da conversa (não precisa mexer)
assets/img/           avatar e imagem de compartilhamento
```

## Telas

| Âncora | Tela |
|---|---|
| `#` | Home: avatar, marca, links e prioridades |
| `#sobre` | Quem é Helena, com linha do tempo |
| `#prioridades` | As 4 bandeiras detalhadas |
| `#contato` | WhatsApp, Instagram e o Centro no mapa |
| `#chat` | Lena, a assistente virtual |

As âncoras funcionam como link direto: `.../#prioridades` abre já na tela.

## Manutenção

Quase tudo se resolve em `data/site.js`:

```js
whatsapp: '5583993287247',
instagram: 'helenaholandahh',
siteOficial: 'https://...',
cnpj: '68.491.829/0001-78'
```

Para mudar textos das bandeiras, edite `data/prioridades.js`. Cada item tem
`titulo`, `resumo`, `texto` e a lista `itens`. A `cor` aceita
`pink`, `orange`, `teal` ou `purple`.

Para acrescentar ou reordenar botões da home, edite o array `LINKS` no topo
de `js/app.js`. Cada botão é ou um link externo (`href`) ou uma subpágina
(`pagina`).

## A assistente (Lena)

É um bot de respostas prontas, sem IA e sem servidor: ele só passa o número
da Helena e diz onde fica o Centro Helena Holanda. Qualquer outro assunto
ele empurra para o WhatsApp.

Os textos ficam em `chatbot/flows.js`. Cada fluxo tem uma `msg` e uma lista
de `chips`:

```js
{ l: 'Rótulo', f: 'id_do_fluxo' }    // vai para outro fluxo
{ l: 'Rótulo', wa: 'mensagem' }      // abre o WhatsApp já com o texto
{ l: 'Rótulo', url: 'https://...' }  // abre um link externo
```

O endereço e o link do Google Maps vêm de `SITE.centro`, em `data/site.js` —
mude lá e a assistente e a tela de contato acompanham. O nome do bot e o
tempo do "digitando..." ficam em `chatbot/config.js`.

## Pendências

- [ ] Endereço completo do Centro Helena Holanda em `SITE.centro.endereco` —
      hoje só o bairro; confirmar rua e número com a equipe
- [ ] E-mail institucional, se a campanha tiver um
- [ ] Revisar com a candidata os textos das prioridades
