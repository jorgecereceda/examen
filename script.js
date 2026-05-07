/*fecha*/
const meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

const salida = document.getElementById("date");

const date = new Date();
const day=date.getDate();
const weekday=date.getDay();
const month=date.getMonth();

const fecha = document.getElementById(id="date");

salida.innerHTML=dias[weekday-1] + " " + day + " de " + meses[month];



/* habilitar boton */
const aceptar = document.getElementById("aceptar");
const enviar = document.getElementById("enviar");

const favcolor=document.getElementById("favcolor");
const valoracion=document.getElementById("valoracion");
const sugerencia=document.getElementById("sugerencia");
const radios = document.querySelectorAll('input[name="tamano"]');
let radioseleccion="pequeño";

radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      radioseleccion = e.target.value;
    });
  });

aceptar.addEventListener("change", ()=>{
    enviar.disabled = !aceptar.checked;
});

enviar.addEventListener("click", function(event){
  event.preventDefault();
  alert(`tamaño: ${radioseleccion}
color: ${favcolor.value}
valoración: ${valoracion.value}
sugerencias: ${sugerencia.value}`);
});


/*cambio imagen*/
const imagen=document.getElementById("imagen");

let imagen1="img/Trabajando1.webp";
let imagen2="img/Trabajando2.jpg";

imagen.addEventListener("click", ()=>{
    let imagenActual=imagen.getAttribute("src");
     if(imagenActual==imagen1)  {

                                imagen.setAttribute("src", imagen2);

                            } else {  
                                imagen.setAttribute("src", imagen1);

                            }
});


/*login*/
const validname="user1";
const validpasword="123";

const popup = document.getElementById("modal");
const loginbutton = document.getElementById("loginbutton");
const closebutton = document.getElementById("closebutton");

loginbutton.addEventListener("click", ()=>{
    modal.style.display = "block";

});
closebutton.addEventListener("click", ()=>{
    modal.style.display = "none";

});

const username =document.getElementById("username");
const password=document.getElementById("pasword");
const login=document.getElementById("login");

login.addEventListener("click", function (event) {
      event.preventDefault();
    if (username.value==validname && password.value==validpasword){
        alert("usuario admitido");
        localStorage.setItem('login', 'true');
    } else {
        alert ("usuario no admitido");
    }
});
