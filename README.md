# InaturaLife — Mini-app (PWA) grátis

Este projeto é um mini-app (PWA) em HTML/CSS/JS.
Funciona por link e pode ser “instalado” na tela inicial do celular.

## Publicar grátis no GitHub Pages (passo a passo)

1) Crie uma conta no GitHub (se ainda não tiver).
2) Clique em **New repository**.
   - Nome sugerido: `inaturalife`
   - Marque **Public**
3) Envie estes arquivos para o repositório (Upload files):
   - index.html, styles.css, app.js, data.js, manifest.json, service-worker.js
   - pasta `icons/`
4) Vá em **Settings → Pages**.
5) Em **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
6) Salve. Em alguns segundos/minutos, o link do seu site aparece ali.

## Atualizar conteúdo

Edite o arquivo `data.js`.
- Cada item tem: `module`, `title`, `category`, `tags` e `blocks`.
- Você pode duplicar um item e criar novos chás/suplementos rapidamente.

## Transformar em “app” no celular

- Android (Chrome): menu ⋮ → **Instalar app** / **Adicionar à tela inicial**
- iPhone (Safari): compartilhar → **Adicionar à Tela de Início**
