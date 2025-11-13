// menu.js

// Detecta se a página está dentro da pasta /Pages
const dentroDePages = window.location.pathname.toLowerCase().includes("/pages/");

// MENU visível na página inicial (index.html)
const navRoot = `
  <a href="index.html">Início</a>
  <a href="Pages/sobre.html">Sobre</a>
  <a href="Pages/cuidados.html">Cuidados</a>
  <a href="Pages/equipe.html">Equipe</a>
  <a href="Pages/diagnostico.html">Diagnóstico</a>
`;

// MENU visível para páginas dentro de /Pages
const navPages = `
  <a href="../index.html">Início</a>
  <a href="sobre.html">Sobre</a>
  <a href="cuidados.html">Cuidados</a>
  <a href="equipe.html">Equipe</a>
  <a href="diagnostico.html">Diagnóstico</a>
`;

// Insere o menu na página
const nav = document.querySelector("nav");
if (nav) {
  nav.innerHTML = dentroDePages ? navPages : navRoot;
}
