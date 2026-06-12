const form = document.querySelector("form");
const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");


const nombre_incorrecto = document.querySelector(".nombre_incorrecto");
const edad_incorrecta = document.querySelector(".edad_incorrecta");
let nombre_ingresado = "";
let edad_ingresada = "";


form.addEventListener ("submit", (e) =>   {


    nombre_ingresado = nombre_input.value;
    edad_ingresada = edad_input.value;
    let numero_caracteres = nombre_ingresado.length

    if (numero_caracteres < 5) {

        nombre_incorrecto.style.display = "block";
        e.preventDefault();
        return;

    } else {

        nombre_incorrecto.style.display = "none";

    }

      if (edad_ingresada < 18 || edad_ingresada > 60) {

        edad_incorrecta.style.display = "block";
        e.preventDefault();
        return;

    } else {

        edad_incorrecta.style.display = "none";

    }


});
