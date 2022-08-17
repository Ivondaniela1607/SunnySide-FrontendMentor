document.getElementById("btn_menu").addEventListener("click", mostrar_menu)
document.getElementById("btn_opt").addEventListener("click", ocultar_menu)

nav = document.getElementById("nav");
back_menu = document.getElementById("back_menu")


function mostrar_menu() {
  console.log("holii")
  nav.style.display = "block";
}

function ocultar_menu() {
  nav.style.display = "none";
  
}