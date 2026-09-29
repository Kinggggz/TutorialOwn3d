# Correção v43

- Corrigido erro de JavaScript na página `builds/`.
- A integração removeu o contador visual `#uCount` do layout original, mas `app.js` ainda tentava escrever nele.
- Isso interrompia `render()` antes de preencher título, distribuição, ordem, rotação, skills e retrato.
- Agora o contador é opcional (`if (el.uCount) ...`).
- `app.js` foi versionado como `?v=10` no HTML para evitar cache antigo do navegador/GitHub Pages.
