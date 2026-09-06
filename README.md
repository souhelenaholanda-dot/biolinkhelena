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
js/app.js             navegação e montagem do conteúdo
data/site.js          contatos e dados legais  ← mexa aqui
data/prioridades.js   as 4 bandeiras           ← e aqui
assets/img/           avatar e imagem de compartilhamento
```

## Telas

| Âncora | Tela |
|---|---|
| `#` | Home: avatar, marca, links e prioridades |
| `#sobre` | Quem é Helena, com linha do tempo |
| `#prioridades` | As 4 bandeiras detalhadas |
| `#contato` | WhatsApp e Instagram |

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

## Pendências

- [ ] `siteOficial` em `data/site.js` — hoje aponta para a URL do GitHub Pages;
      trocar pelo domínio próprio quando existir
- [ ] E-mail institucional, se a campanha tiver um
- [ ] Revisar com a candidata os textos das prioridades
