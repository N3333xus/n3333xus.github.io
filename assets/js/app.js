

let homeContent = 
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

let aboutContent = `

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

let workContent = `

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

let skillsContent = `<div class="skills-section">
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
  
  let enterSequence = new TimelineMax({});

  contentBox.innerHTML = "";
  contentBox.innerHTML = homeContent;
  enterSequence
    .from(".letsTalk", 1, {
      x: -300
    })
    .from("#home", 0.1, {
      opacity: 0
    })
    .from("#home", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#about", 0.1, {
      opacity: 0
    })
    .from("#about", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#work", 0.1, {
      opacity: 0
    })
    .from("#work", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#skills", 0.1, {
      opacity: 0
    })
    .from("#skills", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#pt", 0.1, {
      opacity: 0
    })
    .from("#pt", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#en", 0.1, {
      opacity: 0
    })
    .from("#en", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from(".home", 1, {
      opacity: 0,
      x: -300
    })
    .from(".t1", 0.1, {
      opacity: 0
    })
    .from(".t2", 0.1, {
      opacity: 0
    })
    .from(".t3", 0.1, {
      opacity: 0
    })
    .from(".interface-settings li", 0.9, {
      x: 550
    });

  home.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = homeContent;
    let openHome = new TimelineMax({});
    openHome
      .from(".home", 1, {
        opacity: 0,
        x: -300
      })
      .from(".t1", 0.1, {
        opacity: 0
      })
      .from(".t2", 0.1, {
        opacity: 0
      })
      .from(".t3", 0.1, {
        opacity: 0
      });
  });
  about.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = aboutContent;
    let openAbout = new TimelineMax({});
    openAbout
      .from(".about-section", 1, {
        opacity: 0,
        x: 300
      })
      .from(
        ".about-title h1",
        0.1,
        {
          opacity: 0
        },
        "ww"
      )
      .from(".about-title h1", 0.1, {
        opacity: 1
      })
      .from(".about-title h1", 0.1, {
        opacity: 0
      })
      .from(".about-title h1", 0.1, {
        opacity: 1
      })
      .from(".about-title h1", 0.1, {
        opacity: 0
      })
      .from(".about-text p", 0.2, {
        opacity: 0
      });
  });
  work.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = workContent;
    let openWork = new TimelineMax({});

    openWork
      .from(".work-content-card", 1, {
        opacity: 0,
        x: -300
      })
      .from(
        ".card-5",
        0.1,
        {
          opacity: 0
        },
        "op"
      )
      .from(
        ".card-2",
        0.1,
        {
          opacity: 0
        },
        "op"
      )
      .from(
        ".card-3",
        0.1,
        {
          opacity: 0
        },
        "op"
      )
      .from(
        ".card-6",
        0.1,
        {
          opacity: 0
        },
        "oz"
      )
      .from(
        ".card-1",
        0.1,
        {
          opacity: 0
        },
        "oz"
      )
      .from(
        ".card-4",
        0.1,
        {
          opacity: 0
        },
        "oz"
      );

 
  });

  skills.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = skillsContent;
    let openSkills = new TimelineMax({});
    openSkills
      .from(".skills-content", 0.6, {
        opacity: 0,
        x: 300
      })
      .from(
        ".skills-title h1",
        0.1,
        {
          opacity: 0
        },
        "ww"
      )
      .from(".skills-title h1", 0.1, {
        opacity: 1
      })
      .from(".skills-title h1", 0.1, {
        opacity: 0
      })
      .from(".skills-title h1", 0.1, {
        opacity: 1
      })
      .from(".skills-title h1", 0.1, {
        opacity: 0
      })
      .from(
        ".skills-text",
        0.2,
        {
          opacity: 0
        },
        "ww",
        1
      );
  });
  let openContact = new TimelineMax({ paused: true, reversed: true });
  phoneContact.addEventListener("click", () => {
    phoneContact.classList.toggle("opened");

    openContact.reversed() ? openContact.play() : openContact.reverse();

    openContact.to(".interface-settings li", 0.3, {
      x: 550
    });
  });
});
