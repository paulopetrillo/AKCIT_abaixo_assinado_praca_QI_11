# AKCIT Abaixo-assinado Praça QI 11

Site estático para a petição de manutenção e melhoria da Praça Pastor Adalino Inácio Sobrinho, localizada na QI 11, Guará 1, Distrito Federal.

## Visão Geral

Este projeto contém uma página informativa com:
- descrição da causa e manutenção da praça
- galeria de imagens
- lightbox acessível sem dependências externas
- mapa integrado do Google Maps
- link para petição de apoio

## Tecnologias

- HTML
- CSS
- JavaScript
- Jest para testes unitários

## Estrutura do Projeto

- `index.html` — página principal
- `assets/css/style.css` — estilos do site
- `assets/js/main.js` — script do lightbox e interações
- `assets/js/main.test.js` — testes unitários
- `assets/images/` — imagens da galeria
- `package.json` — definição de dependências e scripts
- `jest.config.js` — configuração do Jest
- `jest.setup.js` — configuração de ambiente de teste
- `test-results.json` — resultado JSON dos últimos testes

## Instalação e Uso

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute os testes:
   ```bash
   npm test
   ```
3. Abra `index.html` em um navegador para visualizar o site.

## Testes

O projeto usa Jest para testes unitários do JavaScript.
O comando `npm test` grava o resultado em `test-results.json`.

## Deploy

Recomenda-se hospedar o site como página estática.
Uma opção simples é usar **GitHub Pages** com branch `main` e `root`.

## Acessibilidade e Performance

- imagens em `assets/images/` usam `loading="lazy"`
- lightbox funcionalidade acessível via teclado
- recomenda-se otimizar imagens com WebP e `srcset`

## Como Contribuir

- Altere textos em `index.html`
- Atualize as imagens em `assets/images/`
- Adicione ou ajuste estilos em `assets/css/style.css`
- Amplie testes em `assets/js/main.test.js`

## Licença

Adicione um arquivo `LICENSE` se desejar explicitar a licença do projeto.
