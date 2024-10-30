

const homeContent = 
    `
    <div class="content-wrapper">
      <section class="home ">
          <div class="greetings content-card">
              <div class="greetings-title">
                  <h1 class="t1">Ola amigo </h1>
                  <h1 class="t2">Meu nome é <span>Lucas</span> </h1>
                  <h1 class="t3">Eu <span>Desenvolvo Software</span></h1>
              </div>
          </div>
      </section>
    </div>
    `;

const aboutContent = `

<section class="about-wrapper">
  <div class="about-section about-content-card">
    <div class="about-content">
      <div class="about-title">
        <h1>Bio</h1>
      </div>
      <div class="about-text">
        <p>
          Texto top aqui
        </p>
      </div>
    </div>
  </div>
</section>`;

const workContent = `

<div class="work-content work-content-card">
    <div class="work-gallery">
        <div class="work-project-card card-6">
            <h1 class="work-project-card-title tooltip ">
            Exemplo de projeto 1 <span class="tooltiptext">
            Project idea: 
            <br>-ideia1 
            <br>-ideia2
            
            </span>
            </h1>
            <a href="https://github.com/magomarto/Georunner" target="_blank">
            <!-- colocar um /.jpg do repositorio -->
            <img class="workPic tooltip" src="https://github.com/magomarto/Georunner"> </a> 
            <a href="https://github.com/magomarto/Georunner">  
            <p class="button-project btn-github ">Go to GITHUB </p></a>
        </div>
    </div>
</div>`;

const skillsContent = `<div class="skills-section">
<div class="skills-content skills-content-card">
    <div class="skills-title">
        <h1>Habilidades</h1>
    </div>
    <div class="skills-text">
        <p> Minha especialidade inclui:
        <p>- Python<i class="fab fa-python"></i>, Django, GNU/Linux<i class="fab fa-linux"></i> e PostgreSQL<i class="fas fa-database"></i></p></p>
        <p>Mas também uso:</p>
        <p>- JavaScript<i class="fa-brands fa-js"></i>, C#, C++, Shell Scripts<br/>
         - Git/Github <i class="fa-brands fa-git-alt"></i>, APACHE<i class="fa-solid fa-server"></i></p>
        <p> Atualmente estou aprofundando meu conhecimento em GNU/Linux <i class="fab fa-linux"></i> e Redes de Computadores <i class="fa-solid fa-globe"></i></p>
        <p> Estou me preparando para as Certificações: CCNA e LPIC-1<p>

    </div>
</div>
</div>`;

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const skills = document.querySelector("#skills");
const pt = document.querySelector("#pt");
const en = document.querySelector("#en");
let contentBox = document.querySelector(".content-wrapper");
let phoneContact = document.querySelector(".letsTalk");
let enter = document.querySelector(".preloader-wrapper");

document.addEventListener("DOMContentLoaded", () => {
  const enterSequence = new TimelineMax({});
  const animations = [
    { selector: ".letsTalk", props: { x: -300 }, duration: 1 },
    { selector: "#home", props: { opacity: 0 }, duration: 0.1 },
    { selector: "#home", props: { y: 400, fontSize: 250 }, duration: 0.3 },
    { selector: "#about", props: { opacity: 0 }, duration: 0.1 },
    { selector: "#about", props: { y: 400, fontSize: 250 }, duration: 0.3 },
    { selector: "#work", props: { opacity: 0 }, duration: 0.1 },
    { selector: "#work", props: { y: 400, fontSize: 250 }, duration: 0.3 },
    { selector: "#skills", props: { opacity: 0 }, duration: 0.1 },
    { selector: "#skills", props: { y: 400, fontSize: 250 }, duration: 0.3 },
    { selector: "#pt", props: { opacity: 0 }, duration: 0.1 },
    { selector: "#pt", props: { y: 400, fontSize: 250 }, duration: 0.3 },
    { selector: "#en", props: { opacity: 0 }, duration: 0.1 },
    { selector: "#en", props: { y: 400, fontSize: 250 }, duration: 0.3 },
    { selector: ".home", props: { opacity: 0, x: -300 }, duration: 1 },
    { selector: ".t1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".t2", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".t3", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".interface-settings li", props: { x: 550 }, duration: 0.9 },
  ];

  const animateElements = (sequence, animations) => {
    animations.forEach(({ selector, props, duration }) => {
      sequence.from(selector, duration, props);
    });
  };

  contentBox.innerHTML = homeContent;
  animateElements(enterSequence, animations);

  const handleClick = (content, animations) => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = content;
    const openTimeline = new TimelineMax({});
    animateElements(openTimeline, animations);
  };

  home.addEventListener("click", () => handleClick(homeContent, [
    { selector: ".home", props: { opacity: 0, x: -300 }, duration: 1 },
    { selector: ".t1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".t2", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".t3", props: { opacity: 0 }, duration: 0.1 },
  ]));

  about.addEventListener("click", () => handleClick(aboutContent, [
    { selector: ".about-section", props: { opacity: 0, x: 300 }, duration: 1 },
    { selector: ".about-title h1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".about-title h1", props: { opacity: 1 }, duration: 0.1 },
    { selector: ".about-title h1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".about-title h1", props: { opacity: 1 }, duration: 0.1 },
    { selector: ".about-title h1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".about-text p", props: { opacity: 0 }, duration: 0.2 },
  ]));

  work.addEventListener("click", () => handleClick(workContent, [
    { selector: ".work-content-card", props: { opacity: 0, x: -300 }, duration: 1 },
    { selector: ".card-5", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".card-2", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".card-3", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".card-6", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".card-1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".card-4", props: { opacity: 0 }, duration: 0.1 },
  ]));

  skills.addEventListener("click", () => handleClick(skillsContent, [
    { selector: ".skills-content", props: { opacity: 0, x: 300 }, duration: 0.6 },
    { selector: ".skills-title h1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".skills-title h1", props: { opacity: 1 }, duration: 0.1 },
    { selector: ".skills-title h1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".skills-title h1", props: { opacity: 1 }, duration: 0.1 },
    { selector: ".skills-title h1", props: { opacity: 0 }, duration: 0.1 },
    { selector: ".skills-text", props: { opacity: 0 }, duration: 0.2 },
  ]));

  const openContact = new TimelineMax({ paused: true, reversed: true });
  phoneContact.addEventListener("click", () => {
    phoneContact.classList.toggle("opened");
    openContact.reversed() ? openContact.play() : openContact.reverse();
    openContact.to(".interface-settings li", 0.3, { x: 550 });
  });
});
