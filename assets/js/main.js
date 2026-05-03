// Minimal lightbox for the 10 images; accessible, keyboard support
(function(){
  const images = [
    {src:'assets/images/Imagem01.jpg', caption:'Imagem01', alt:'Imagem 1 - Praça'},
    {src:'assets/images/Imagem02.jpg', caption:'Imagem02', alt:'Imagem 2 - Praça'},
    {src:'assets/images/Imagem03.jpg', caption:'Imagem03', alt:'Imagem 3 - Praça'},
    {src:'assets/images/Imagem04.jpg', caption:'Imagem04', alt:'Imagem 4 - Praça'},
    {src:'assets/images/Imagem05.jpg', caption:'Imagem05', alt:'Imagem 5 - Praça'},
    {src:'assets/images/Imagem06.jpg', caption:'Imagem06', alt:'Imagem 6 - Praça'},
    {src:'assets/images/Imagem07.jpg', caption:'Imagem07', alt:'Imagem 7 - Praça'},
    {src:'assets/images/Imagem08.jpg', caption:'Imagem08', alt:'Imagem 8 - Praça'},
    {src:'assets/images/Imagem09.jpg', caption:'Imagem09', alt:'Imagem 9 - Praça'},
    {src:'assets/images/Imagem10.jpg', caption:'Imagem10', alt:'Imagem 10 - Praça'}
  ];

  const lightbox = document.getElementById('lightbox');
  const lbImage = lightbox.querySelector('.lb-image');
  const lbCaption = lightbox.querySelector('.lb-caption');
  const btnClose = lightbox.querySelector('.lb-close');
  const btnPrev = lightbox.querySelector('.lb-prev');
  const btnNext = lightbox.querySelector('.lb-next');
  let current = 0;

  function open(index){
    current = index;
    const it = images[current];
    lbImage.src = it.src;
    lbImage.alt = it.alt;
    lbCaption.textContent = it.caption;
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function close(){
    lightbox.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    // return focus to thumbnail
    const btn = document.querySelector('.thumb-btn[data-index="'+(current+1)+'"]');
    if(btn) btn.focus();
  }

  function prev(){
    current = (current - 1 + images.length) % images.length;
    open(current);
  }

  function next(){
    current = (current + 1) % images.length;
    open(current);
  }

  // attach thumbnails
  document.querySelectorAll('.thumb-btn').forEach(btn=>{
    const idx = Number(btn.getAttribute('data-index')) - 1;
    btn.addEventListener('click',()=> open(idx));
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', prev);
  btnNext.addEventListener('click', next);

  // keyboard
  document.addEventListener('keydown', (e)=>{
    if(lightbox.getAttribute('aria-hidden') === 'false'){
      if(e.key === 'Escape') close();
      if(e.key === 'ArrowLeft') prev();
      if(e.key === 'ArrowRight') next();
    }
  });

  // click outside to close
  lightbox.addEventListener('click', (e)=>{
    if(e.target === lightbox) close();
  });

  // build date
  document.getElementById('build-date').textContent = new Date().toLocaleDateString('pt-BR');
})();