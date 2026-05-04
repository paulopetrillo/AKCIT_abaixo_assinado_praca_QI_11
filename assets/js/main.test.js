const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Carregar o HTML e JS
const htmlPath = path.join(__dirname, '../../index.html');
const jsPath = path.join(__dirname, 'main.js');
const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

describe('Lightbox Tests', () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    window = dom.window;
    document = window.document;
    // Executar o JS no contexto do DOM
    eval(js);
  });

  test('Array de imagens tem 16 itens', () => {
    expect(window.images.length).toBe(16);
  });

  test('Cada imagem tem propriedades src, caption e alt', () => {
    window.images.forEach(img => {
      expect(img).toHaveProperty('src');
      expect(img).toHaveProperty('caption');
      expect(img).toHaveProperty('alt');
    });
  });

  test('Abrir lightbox define src e caption corretos', () => {
    window.openLightbox(0); // Abrir primeira imagem
    const lbImage = document.querySelector('.lb-image');
    const lbCaption = document.querySelector('.lb-caption');
    expect(lbImage.src).toContain('IMG_20260503_154026854_HDR.jpg');
    expect(lbCaption.textContent).toBe('IMG_20260503_154026854_HDR');
  });

  test('Abrir lightbox define aria-hidden como false', () => {
    window.openLightbox(0);
    const lightbox = document.getElementById('lightbox');
    expect(lightbox.getAttribute('aria-hidden')).toBe('false');
  });

  test('Fechar lightbox define aria-hidden como true', () => {
    window.openLightbox(0);
    window.closeLightbox();
    const lightbox = document.getElementById('lightbox');
    expect(lightbox.getAttribute('aria-hidden')).toBe('true');
  });

  test('Navegação next() funciona circularmente', () => {
    window.openLightbox(15); // Última imagem
    window.nextLightbox(); // Deve voltar para 0
    expect(window.currentIndex()).toBe(0);
  });

  test('Navegação prev() funciona circularmente', () => {
    window.openLightbox(0); // Primeira imagem
    window.prevLightbox(); // Deve ir para 15
    expect(window.currentIndex()).toBe(15);
  });

  test('Data de build é definida', () => {
    const buildDate = document.getElementById('build-date');
    expect(buildDate.textContent).toMatch(/\d{2}\/\d{2}\/\d{4}/); // Formato brasileiro
  });
});