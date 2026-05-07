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

aceptar.addEventListener("change", ()=>{
    enviar.disabled = !aceptar.checked;
});

enviar.addEventListener("click", function(event){
  event.preventDefault();
  alert("mensaje enviado");
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
