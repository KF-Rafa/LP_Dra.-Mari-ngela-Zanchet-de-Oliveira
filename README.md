# Landing page — Dra. Mariângela Zanchet de Oliveira

Site estático de Odontopediatria, Ortopedia Funcional dos Maxilares e Ortodontia em Porto Alegre.

## Abrir

Abra `index.html` ou sirva a pasta:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Endereço local: http://127.0.0.1:8765

`dra-mariangela-zanchet-preview.html` é uma cópia compartilhável com CSS, JavaScript e fotos embutidos. As fontes Montserrat usam Google Fonts; sem internet, a página usa Arial.

## Arquivos

- `index.html`: estrutura, textos e links.
- `assets/style.css`: paleta, composição e regras responsivas.
- `assets/main.js`: menu acessível, ano e WhatsApp flutuante.
- `assets/img/web/`: quatro fotografias otimizadas em WebP (aproximadamente 396 KB no total).
- `dra-mariangela-zanchet-preview.html`: versão portátil da página.

## Revisão de setembro de 2026

Sequência baseada em `Onbording/HEADER Leading Page.docx`: apresentação, diferencial, pilares, tratamentos e recursos, primeira consulta, Dra., tecnologia, informações gerais e convite final.

Foram removidos régua lateral, animações de entrada, molduras irregulares, selos sobrepostos e repetição dos cartões de recursos. Os textos foram simplificados e as imagens artificiais 3/4/5 deixaram de ser exibidas. Fotos reais 1/2/6/7 estão preservadas e têm versões leves para a web.

Paleta mantida: rosa `#C9929B`, off-white `#FAF7F5`, bege `#E2D3CE`, taupe `#6F5E5E`. A superfície clara mistura 50% de bege e 50% de off-white para oferecer contraste de 4,93:1 com taupe. Botões taupe/off-white têm contraste de 5,73:1.

As duas referências locais, Nadia e Sabrina, orientaram a hierarquia, presença de fotografias reais, navegação curta e informação de localização. Nenhuma imagem ou alegação clínica foi copiada dessas páginas.

## Verificações

- Dois agentes revisaram conteúdo, ordem e implementação.
- IDs únicos; um H1; âncoras e arquivos locais existentes.
- `node --check assets/main.js` passou.
- O menu passou nas verificações de abertura, Escape, clique em link, clique externo, mudança de breakpoint e visibilidade do WhatsApp.
- Revisão estática de regras para 320, 390, 768, 960, 1024 e 1440 px; navegação disponível sem JavaScript.
- Servidor local retornou HTTP 200.
- Conferência visual no navegador pendente: Chrome não estava conectado à ferramenta desta sessão. Não há captura que comprove a renderização final.

## Dados a completar antes da publicação

- CRO/RS: não foi fornecido no material.
- Política de privacidade: o rodapé anterior tinha apenas um rótulo, sem documento ou link. Foi retirado; inserir o link quando a clínica fornecer o texto aprovado.

21 anos de atuação, formação, habilitação, endereço, horários, estacionamento, formas de pagamento e atendimento particular foram mantidos conforme o HEADER fornecido.

WhatsApp: `5551993641535`. Para alterar, revise os links em `index.html` e regenere a prévia.
