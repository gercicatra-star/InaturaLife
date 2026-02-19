# InaturaLife (PWA) — pronto para GitHub Pages

Este ZIP já vem com:
- Tela Início + abas (Grátis/Premium) para Chás, Suplementos e Protocolos
- Login por email + bloqueio do Premium
- Validação Premium via Google Sheets (lista de emails)
- PWA (instalável) com cache offline

## Publicar no GitHub Pages (sem programação)
1. Crie um repositório no GitHub (ex.: `inaturalife`).
2. Faça upload de TODOS os arquivos deste ZIP na raiz do repositório.
3. No GitHub: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / folder **/ (root)**
4. Abra o link do GitHub Pages.

## Configurar Premium (Hotmart — email da compra)
Você vai manter uma planilha com uma coluna de emails (pode ser só 1 coluna).

Planilha (link que você enviou): https://docs.google.com/spreadsheets/d/1oDGOhoMu50BQslrXPFvCQP_i4JLp5Cw3Fz32tNrZ2Kw/edit?usp=sharing

### Publicar a planilha como CSV
1. Abra a planilha no Google Sheets
2. **Arquivo → Compartilhar → Publicar na web**
3. Selecione a aba onde estão os emails e o formato **CSV**
4. Clique em **Publicar**
5. Copie o link gerado (termina com `output=csv`)

### Colar a URL no app
Abra `config.js` e cole no campo:
`premiumCsvUrl: "COLE_AQUI_SUA_URL_CSV"`

Depois, faça commit no GitHub e aguarde a atualização.

## Trocar imagens (opcional)
Substitua os arquivos em `assets/img/` mantendo os mesmos nomes.

Pronto ✅
