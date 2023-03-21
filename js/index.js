/* BIBLIOTECA TYPE IT - texto automático ------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".texto-automatico", {
    speed: 200,
    loop: true,
  })
    .type("Eu sou o Bruno!", { delay: 600 })
    .type(" ")
    .pause(300)
    .delete(3)
    .type("no!", { delay: 100 })
    .type(" ")
    .pause(5000)
    .delete(16)
    .pause(1000)
    .go();
});

/* BOTÃO MOSTRAR MAIS - projetos -------------------------------------------------------------- */
var myButton = document.getElementById("projetos-btn");
var myDiv = document.getElementById("secundario");

myButton.addEventListener("click", function () {
  if (myDiv.style.display === "none") {
    myDiv.style.display = "flex";
    myButton.innerHTML = "Mostrar Menos";
  } else {
    myDiv.style.display = "none";
    myButton.innerHTML = "Mostrar Mais";
  }
});

/* MOSTRAR AS TECNOLOGIAS - tecnologias ----------------------------------------------------- */

var mostrarHTML = document.getElementById("html");
mostrarHTML.addEventListener("mouseover", function () {
  var titulo = document.querySelector(".tecnologia-nome");
  var significado = document.querySelector(".tecnologia-sobre");
  titulo.innerHTML = "HTML 5";
  significado.innerHTML =
    "O HTML (Hyper Text Markup Language)  é uma linguagem de marcação, essencial para o funcionamento da internet. Além de conter o conteúdo do site, como os textos, imagens e links, é o HTML que pode ser interpretado pelos navegadores.";
});

var mostrarHTML = document.getElementById("css");
mostrarHTML.addEventListener("mouseover", function () {
  var titulo = document.querySelector(".tecnologia-nome");
  var significado = document.querySelector(".tecnologia-sobre");
  titulo.innerHTML = "CSS 3";
  significado.innerHTML = "O CSS (Cascading Style Sheets) é uma linguagem de estilo, usada para modificar a aparência dos sites. É só graças ao CSS que design incríveis se tornam rais, sem ele, os sites seriam feios e complicados.";
});

var mostrarHTML = document.getElementById("js");
mostrarHTML.addEventListener("mouseover", function () {
  var titulo = document.querySelector(".tecnologia-nome");
  var significado = document.querySelector(".tecnologia-sobre");
  titulo.innerHTML = "JavaScript";
  significado.innerHTML = "O JavaScript é uma linguagem de programação de alto nível. Graças a essa tecnologia, é possível fazer com que as páginas se tornem interativas. A funcionalidade que você está usando nesse momento só foi possível devido ao JavaScript";
});

var mostrarHTML = document.getElementById("react");
mostrarHTML.addEventListener("mouseover", function () {
  var titulo = document.querySelector(".tecnologia-nome");
  var significado = document.querySelector(".tecnologia-sobre");
  titulo.innerHTML = "React.JS";
  significado.innerHTML = "React é um framework JavaScript criado pelo Facebook (atual Meta). Um framework é um conjunto de ferramentas e bibliotecas que fornecem um conjunto de recursos e funcionalidades prontas para desenvolvedores de software. Isso agiliza todo o processo de programar!";
});

var mostrarHTML = document.getElementById("git");
mostrarHTML.addEventListener("mouseover", function () {
  var titulo = document.querySelector(".tecnologia-nome");
  var significado = document.querySelector(".tecnologia-sobre");
  titulo.innerHTML = "Git";
  significado.innerHTML = "O Git é um sistema de controle de versão distribuído, o que significa que um clone local do projeto é um repositório de controle de versão completo. Esses repositórios locais totalmente funcionais facilitam o trabalho offline ou remotamente.";
});           

/* MENU HAMBURGUER ------------------------------------------------------ */

