// Minimal lightbox for the 10 images; accessible, keyboard support
(function(){
  const images = [
    {src:'assets/images/IMG_20260503_154026854_HDR.jpg', caption:'IMG_20260503_154026854_HDR', alt:'Imagem 1 - Praça'},
    {src:'assets/images/IMG_20260503_154046762.jpg', caption:'IMG_20260503_154046762', alt:'Imagem 2 - Praça'},
    {src:'assets/images/IMG_20260503_154100838_HDR.jpg', caption:'IMG_20260503_154100838_HDR', alt:'Imagem 3 - Praça'},
    {src:'assets/images/IMG_20260503_154141582_HDR.jpg', caption:'IMG_20260503_154141582_HDR', alt:'Imagem 4 - Praça'},
    {src:'assets/images/IMG_20260503_154153150_HDR.jpg', caption:'IMG_20260503_154153150_HDR', alt:'Imagem 5 - Praça'},
    {src:'assets/images/IMG_20260503_154204550.jpg', caption:'IMG_20260503_154204550', alt:'Imagem 6 - Praça'},
    {src:'assets/images/IMG_20260503_154211580.jpg', caption:'IMG_20260503_154211580', alt:'Imagem 7 - Praça'},
    {src:'assets/images/IMG_20260503_154232175_HDR.jpg', caption:'IMG_20260503_154232175_HDR', alt:'Imagem 8 - Praça'},
    {src:'assets/images/IMG_20260503_154238114_HDR.jpg', caption:'IMG_20260503_154238114_HDR', alt:'Imagem 9 - Praça'},
    {src:'assets/images/IMG_20260503_154305308_HDR.jpg', caption:'IMG_20260503_154305308_HDR', alt:'Imagem 10 - Praça'},
    {src:'assets/images/IMG_20260503_154320493.jpg', caption:'IMG_20260503_154320493', alt:'Imagem 11 - Praça'},
    {src:'assets/images/IMG_20260503_154333497.jpg', caption:'IMG_20260503_154333497', alt:'Imagem 12 - Praça'},
    {src:'assets/images/IMG_20260503_154337478.jpg', caption:'IMG_20260503_154337478', alt:'Imagem 13 - Praça'},
    {src:'assets/images/IMG_20260503_154358190_HDR.jpg', caption:'IMG_20260503_154358190_HDR', alt:'Imagem 14 - Praça'},
    {src:'assets/images/IMG_20260503_154423402.jpg', caption:'IMG_20260503_154423402', alt:'Imagem 15 - Praça'},
    {src:'assets/images/IMG_20260503_154438050.jpg', caption:'IMG_20260503_154438050', alt:'Imagem 16 - Praça'}
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