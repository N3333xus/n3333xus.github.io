// main.js
document.addEventListener('DOMContentLoaded', () => {
  initCyberEffects();
  initPhraseChanger();
  enhanceExternalLinks();
});

function initCyberEffects() {
  const el = document.querySelector('#typed');
  if (el && typeof Typed !== 'undefined') {
      new Typed(el, {
          strings: [
              'I am Lucas^9000',
              'I Develop Software^1000000',
          ],
          typeSpeed: 40,
          backSpeed: 0,
          loop: false,
          showCursor: false,
          //cursorChar: '█',
          onStringTyped: () => el.classList.add('glitch-effect'),
          onPreStringTyped: () => el.classList.remove('glitch-effect')
      });
  }
  

  const grid = document.querySelector('.grid-lines');
  let mouseX = 0, mouseY = 0;
  const centerX = window.innerWidth/2;
  const centerY = window.innerHeight/2;

  document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - centerX) * 0.02;
      mouseY = (e.clientY - centerY) * 0.02;
  });

  function animate() {
      const damp = 0.08;
      const dx = mouseX + Math.sin(Date.now() * 0.002) * 10;
      const dy = mouseY + Math.cos(Date.now() * 0.002) * 5;
      
      grid.style.transform = `
          translate3d(${dx}px, ${dy}px, 0)
          rotate3d(${dy * 0.01}, ${dx * 0.01}, 0, 1deg)
      `;
      
      requestAnimationFrame(animate);
  }
  animate();
}

const phrases = [
  {phrase :" Do or not, there is no try.", author : "-- Yoda"},
  {phrase :" There is a difference between knowing the path and walking the path.", author : "-- Morpheus"},
  {phrase :" We Shouldn’t Fear Change Itself, But Only Who We Might Change Into.", author : "–- Misty"}, 
  {phrase :" I want to get online... I need a computer!", author : "-- Johnny Mnemonic"},
  {phrase :" Your Body Can Be Chrome... But The Heart Never Changes. It Wants What It Wants.", author : "-- Lizzy Wizzy "},
  {phrase :" I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the darkness at Tan Hauser Gate. All those moments will be lost in time like tears in rain. Time to die.", author : "-- Roy Batty"},
  {phrase :" The sky above the port was the color of television, tuned to a dead channel.", author : "-- Willian Gibson"},
  {phrase :" What is real? How do you define ‘real’?", author : "-- Morpheus"},
];


function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function showPhraseAndAuthor() {
  const elementPhrase = document.getElementById('phrase');
  const elementAuthor = document.getElementById('author');
  const phrase = getRandomPhrase();

  elementPhrase.classList.remove('fade-in');
  elementAuthor.classList.remove('fade-in');
  
  setTimeout(() => {
      elementPhrase.textContent = phrase.phrase;
      elementAuthor.textContent = phrase.author;
      
      elementPhrase.classList.add('fade-in');
      elementAuthor.classList.add('fade-in');
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    showPhraseAndAuthor();
    setInterval(showPhraseAndAuthor, 60000);
});

function enhanceExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.classList.add('cyberlink');
      link.innerHTML = `
          ${link.textContent}
          <span class="link-hover"></span>
      `;
      link.setAttribute('rel', 'noopener noreferrer');
  });
}

