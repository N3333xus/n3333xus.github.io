const pt = document.querySelector("#pt");
const en = document.querySelector("#en");

const translations = {
    pt: {
      home: {
        title1: "Olá amigo",
        title2: "Meu nome é <span>Lucas</span>",
        title3: "Eu <span>Desenvolvo Software</span>",
      },
      about: {
        title: "Bio",
        text: "Texto top aqui",
      },
      work: {
        project1: {
          title: "Exemplo de projeto 1",
          tooltip: "Project idea: <br>-ideia1 <br>-ideia2",
          github: "Ir para o GITHUB",
        },
      },
      skills: {
        title: "Habilidades",
        specialties: "Minha especialidade inclui: ",
        skills: "- Python, Django, GNU/Linux e PostgreSQL",
        additionalSkills: "Mas também uso: ",
      },
    },
    en: {
      home: {
        title1: "Hello friend",
        title2: "My name is <span>Lucas</span>",
        title3: "I <span>Develop Software</span>",
      },
      about: {
        title: "Bio",
        text: "Top text here",
      },
      work: {
        project1: {
          title: "Project example 1",
          tooltip: "Project idea: <br>-idea1 <br>-idea2",
          github: "Go to GITHUB",
        },
      },
      skills: {
        title: "Skills",
        specialties: "My specialty includes: ",
        skills: "- Python, Django, GNU/Linux and PostgreSQL",
        additionalSkills: "But I also use: ",
      },
    },
  };