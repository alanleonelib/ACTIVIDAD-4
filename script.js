const form = document.querySelector("form");
const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const email_input = document.querySelector("#email");
const terminos_input = document.querySelector("#terminos")
const pais_input = document.querySelector("#pais");


const nombre_incorrecto = document.querySelector(".nombre_incorrecto");
const edad_incorrecta = document.querySelector(".edad_incorrecta");
const campo_vacio = document.querySelector(".completar_vacio")
const email_incorrecto = document.querySelector(".email_incorrecto")


form.addEventListener ("submit", (e) =>   {


    const nombre_ingresado = nombre_input.value.trim();
    const edad_ingresada = Number(edad_input.value);
    const email_ingresado = email_input.value.trim();

    campo_vacio.style.display = "none";
    nombre_incorrecto.style.display = "none";
    edad_incorrecta.style.display = "none";
    email_incorrecto.style.display = "none";

    let numero_caracteres = nombre_ingresado.length
    const email_valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre_ingresado === "" || email_ingresado === "" || edad_input.value === "" || pais_input.value === "" || !terminos_input.checked ) {

        campo_vacio.style.display = "block";
        e.preventDefault();
        return

    }

    if (numero_caracteres < 5) {

        nombre_incorrecto.style.display = "block";
        e.preventDefault();
        return;

    } else {

        nombre_incorrecto.style.display = "none";

    }

       if (!email_valido.test(email_ingresado)) {

        email_incorrecto.style.display = "block";
        e.preventDefault();
        return;

    } else {

        email_incorrecto.style.display = "none";

    }

      if (edad_ingresada < 18 || edad_ingresada > 60) {

        edad_incorrecta.style.display = "block";
        e.preventDefault();
        return;

    } else {

        edad_incorrecta.style.display = "none";

    }


});
