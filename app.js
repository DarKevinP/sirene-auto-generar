
// Obtener elementos del DOM
const showInfantilBtn = document.getElementById("show-infantil-btn");
const babyShowerBtn = document.getElementById("baby-shower-btn");
const showInfantilSection = document.getElementById(
  "show-infantil-section"
);
const babyShowerSection = document.getElementById("baby-shower-section");
const showBasicoBtn = document.getElementById("show-basico-btn");
const showBailarinaBtn = document.getElementById("show-bailarina-btn");
const showGrandeBtn = document.getElementById("show-grande-btn");

const cantidadAnimadoresInfantilSelect = document.getElementById(
  "cantidad-animadores-infantil"
);
const cantidadAnimadoresBabySelect = document.getElementById(
  "cantidad-animadores-baby"
);
const animadoresContainerInfantil = document.getElementById(
  "animadores-container-infantil"
);
const animadoresContainerBaby = document.getElementById(
  "animadores-container-baby"
);
const generarShowInfantilBtn = document.getElementById(
  "generar-show-infantil-btn"
);
const generarBabyShowerBtn = document.getElementById(
  "generar-baby-shower-btn"
);
const textoGeneradoTextarea = document.getElementById("texto-generado");

// Mostrar sección correspondiente al botón seleccionado
showInfantilBtn.addEventListener("click", function () {
  showInfantilSection.style.display = "block";
  babyShowerSection.style.display = "none";
});

babyShowerBtn.addEventListener("click", function () {
  showInfantilSection.style.display = "none";
  babyShowerSection.style.display = "block";
});

// Mostrar campos adicionales dependiendo del tipo de show infantil seleccionado
showBasicoBtn.addEventListener("click", function () {
  animadoresContainerInfantil.innerHTML = "";
});

showBailarinaBtn.addEventListener("click", function () {
  animadoresContainerInfantil.innerHTML = "";
});

showGrandeBtn.addEventListener("click", function () {
  animadoresContainerInfantil.innerHTML = "";
});

// Agregar campos de nombre de animadores según la cantidad seleccionada en baby shower
cantidadAnimadoresBabySelect.addEventListener("change", function () {
  const cantidadAnimadores = parseInt(cantidadAnimadoresBabySelect.value);
  animadoresContainerBaby.innerHTML = "";
  animadoresContainerInfantil.innerHTML = "";

  for (let i = 1; i <= cantidadAnimadores; i++) {
    const label = document.createElement("label");
    label.textContent = `Nombre animador/a ${i}:`;

    const input = document.createElement("input");
    input.type = "text";
    input.name = `nombre-animador-baby-${i}`;

    animadoresContainerBaby.appendChild(label);
    animadoresContainerBaby.appendChild(input);
  }
});

// Agregar campos de nombre de animadores según la cantidad seleccionada en infantil
cantidadAnimadoresInfantilSelect.addEventListener("change", function () {
  const cantidadAnimadores = parseInt(cantidadAnimadoresInfantilSelect.value);
  animadoresContainerBaby.innerHTML = "";
  animadoresContainerInfantil.innerHTML = "";

  for (let i = 1; i <= cantidadAnimadores; i++) {
    const label = document.createElement("label");
    label.textContent = `Nombre animador/a ${i}:`;

    const input = document.createElement("input");
    input.type = "text";
    input.name = `nombre-animador-infantil-${i}`;

    animadoresContainerInfantil.appendChild(label);
    animadoresContainerInfantil.appendChild(input);
  }
});


//!generar texto
// Generar texto correspondiente al show infantil seleccionado
generarShowInfantilBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // const direccioninfantil = document.getElementById("direccioninfantil").value;
  // const nombreCumpleanero =
  //   document.getElementById("nombre-cumpleanero").value;

  // let textoGenerado = `-Show Infantil-\n`+`Dirección: ${direccioninfantil}\n`;
  // textoGenerado += `Nombre cumpleañer@: ${nombreCumpleanero}\n`;

  // textoGeneradoTextarea.value = textoGenerado;
});

// Generar texto correspondiente al baby shower seleccionado
generarBabyShowerBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const cantidadAnimadores = parseInt(cantidadAnimadoresBabySelect.value);

  let textoGenerado = `-Baby Shower-\n`;//+`Cantidad de animadores: ${cantidadAnimadores}\n`;

  const tipoShowBaby = document.getElementById("tipo-show-baby").value;
  const direccionBaby = document.getElementById("direccionbaby").value;
  const fechaBaby = document.getElementById("fechababy").value;
  const horaLlegadaBaby = document.getElementById("horallegadababy").value;
  const horaSalidaBaby = document.getElementById("horasalidababy").value;
  const horaLlegadaShowBaby = document.getElementById("horallegadashowbaby").value;
  const horaComienzoShowBaby = document.getElementById("horacomienzoshowbaby").value;
  const tipoAnimadoraBaby = document.getElementById("tipobaby").value;
  const nombreDjBaby = document.getElementById("nombredj-baby").value;
  const papaBaby = document.getElementById("papababy").value;
  const mamaBaby = document.getElementById("mamababy").value;
  const nombreContacto1Baby = document.getElementById("nombrecontactobaby1").value;
  const celularContacto1Baby = document.getElementById("celularcontactobaby1").value;
  const nombreContacto2Baby = document.getElementById("nombrecontactobaby2").value;
  const celularContacto2Baby = document.getElementById("celularcontactobaby2").value;
  const saldoBaby = document.getElementById("saldobaby").value;
  const movilidadesBaby = document.getElementById("movilidadesbaby").value;
  const comentarioBaby = document.getElementById("comentariobaby").value;

  // Obtener los nombres de los animadores
  const animadoresContainerBaby = document.getElementById("animadores-container-baby");
  const animadoresInputs = animadoresContainerBaby.getElementsByTagName("input");
  let nombresAnimadores = "";
  for (let i = 0; i < animadoresInputs.length; i++) {
    const nombreAnimador = animadoresInputs[i].value;
    nombresAnimadores += `Animador/a ${i + 1}: ${nombreAnimador}\n`;
  }

  textoGenerado += `Tipo de lugar: ${tipoShowBaby}\n`;
  textoGenerado += `Direccion: ${direccionBaby}\n`;
  textoGenerado += `Fecha(A/M/D): ${fechaBaby}\n`;
  textoGenerado += `Hora de llegada a Sirene: ${horaLlegadaBaby}\n`;
  textoGenerado += `Hora de salida de Sirene: ${horaSalidaBaby}\n`;
  textoGenerado += `Hora de llegada al show: ${horaLlegadaShowBaby}\n`;
  textoGenerado += `Hora de comienzo del show: ${horaComienzoShowBaby}\n`;
  textoGenerado += `Tipo de animadora/es: ${tipoAnimadoraBaby}\n`;

  // Insertar los nombres de los animadores antes de "Nombre DJ"
  textoGenerado += nombresAnimadores;

  textoGenerado += `Nombre DJ: ${nombreDjBaby}\n`;
  textoGenerado += `Papá: ${papaBaby}\n`;
  textoGenerado += `Mamá: ${mamaBaby}\n`;
  textoGenerado += `Nombre y Celular Contacto (1): ${nombreContacto1Baby}`+` || ${celularContacto1Baby}\n`;
  // textoGenerado += `Celular Contacto 1: ${celularContacto1Baby}\n`;
  textoGenerado += `Nombre y Celular Contacto (2): ${nombreContacto2Baby}`+` || ${celularContacto2Baby}\n`;
  // textoGenerado += `Celular Contacto 2: ${celularContacto2Baby}\n`;
  if(movilidadesBaby == 1){
    textoGenerado += `Saldo: ${saldoBaby} + movilidades \n`;
  }else{
    textoGenerado += `Saldo: ${saldoBaby}, movilidades ya pagadas\n`;
  }
  // textoGenerado += `Saldo: ${saldoBaby}\n`;
  // textoGenerado += `¿Movilidades?: ${movilidadesBaby}\n`;
  textoGenerado += `Comentario: ${comentarioBaby}\n`;

  textoGeneradoTextarea.value = textoGenerado;
});

  textoGeneradoTextarea.addEventListener("click", function () {
    // Copiar al portapapeles
    navigator.clipboard
      .writeText(textoGeneradoTextarea.value)
      .then(function () {
        // Mostrar mensaje de copiado
        const mensajeCopiado = document.createElement("p");
        mensajeCopiado.textContent = "Copiado al portapapeles";
        mensajeCopiado.style.color = "green";
        document.body.appendChild(mensajeCopiado);

        // Eliminar mensaje después de 5 segundos
        setTimeout(function () {
          mensajeCopiado.remove();
        }, 5000);
      })
      .catch(function (error) {
        console.error("Error al copiar al portapapeles:", error);
      });
  });


// !para show infantil
// Obtén referencias a los elementos relevantes

// Agrega event listeners a los botones
showBasicoBtn.addEventListener("click", function () {
  // Restablecer los valores por defecto
  cantidadAnimadoresInfantilSelect.value = "Seleccione la cantidad";
  animadoresContainerInfantil.innerHTML = "";
  document.getElementById("animadores-container-infantil").innerHTML = "";
  document.getElementById("animadores-container-baby").innerHTML = "";
  document.getElementById("munecos-container-infantil").innerHTML = "";
  document.getElementById("show-grande-tipo").innerHTML = "";
});

//* show con bailarina
showBailarinaBtn.addEventListener("click", function () {
  // Restablecer los valores por defecto
  cantidadAnimadoresInfantilSelect.value = "Seleccione la cantidad";
  animadoresContainerInfantil.innerHTML = "";
  document.getElementById("animadores-container-infantil").innerHTML = "";
  document.getElementById("animadores-container-baby").innerHTML = "";
  document.getElementById("munecos-container-infantil").innerHTML = "";
  document.getElementById("show-grande-tipo").innerHTML = "";

  // Eliminar los elementos <label> e <input> existentes en el contenedor
  const elementosAnteriores = document.querySelectorAll("#bailarinas-container-infantil label, #bailarinas-container-infantil input");
  elementosAnteriores.forEach((elemento) => {
    elemento.remove();
  });

  // Crear el elemento <select> si no existe
  let bailarinaSelect = document.querySelector("#bailarina-select");
  if (!bailarinaSelect) {
    bailarinaSelect = document.createElement("select");
    bailarinaSelect.id = "bailarina-select";
    // Agregar opción por defecto al <select>
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Escoja cantidad de bailarinas";
    bailarinaSelect.appendChild(defaultOption);
    // Agregar el <select> al contenedor de bailarinas
    document.getElementById("bailarinas-container-infantil").appendChild(bailarinaSelect);
  }

  // Agregar opciones al <select>
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i} bailarina/s seleccionada/s`;
    bailarinaSelect.appendChild(option);
  }

  // Agregar event listener al <select>
  bailarinaSelect.addEventListener("change", function () {
    const cantidadBailarinas = parseInt(bailarinaSelect.value);
    // Eliminar los elementos <label> e <input> existentes en el contenedor
    const elementosAnteriores = document.querySelectorAll("#bailarinas-container-infantil label, #bailarinas-container-infantil input");
    elementosAnteriores.forEach((elemento) => {
      elemento.remove();
    });

    // Crear los <input> para los nombres de las bailarinas
    for (let i = 1; i <= cantidadBailarinas; i++) {
      const label = document.createElement("label");
      label.textContent = `Nombre Bailarina ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.id = `nombre-bailarina-${i}`;
      input.name = `nombre-bailarina-${i}`;

      document.getElementById("bailarinas-container-infantil").appendChild(label);
      document.getElementById("bailarinas-container-infantil").appendChild(input);
    }
  });
});


//*grande show
showGrandeBtn.addEventListener("click", function () {
  // Restablecer los valores por defecto
  cantidadAnimadoresInfantilSelect.value = "Seleccione la cantidad";
  animadoresContainerInfantil.innerHTML = "";
  document.getElementById("animadores-container-infantil").innerHTML = "";
  document.getElementById("animadores-container-baby").innerHTML = "";
  document.getElementById("munecos-container-infantil").innerHTML = "";
  document.getElementById("show-grande-tipo").innerHTML = "";

  // Crear el elemento <select> para el tipo de show
  const tipoShowSelect = document.createElement("select");
  tipoShowSelect.id = "tipo-show-select";

  // Agregar opciones al <select> para el tipo de show
  const options = ["Show de magia", "Show de magia y burbujas", "Show de magia, burbujas y cientifico", "Show de cientifico"];
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.value = options[i];
    option.textContent = options[i];
    tipoShowSelect.appendChild(option);
  }

  // Crear el elemento <select> para la cantidad de bailarinas
  const bailarinaSelect = document.createElement("select");
  bailarinaSelect.id = "bailarina-select";

  // Agregar opciones al <select> para la cantidad de bailarinas
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Bailarina ${i}`;
    bailarinaSelect.appendChild(option);
  }

  // Crear el elemento <select> para la cantidad de muñecos
  const munecoSelect = document.createElement("select");
  munecoSelect.id = "muneco-select";

  // Agregar opciones al <select> para la cantidad de muñecos
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Muñeco ${i}`;
    munecoSelect.appendChild(option);
  }

  // Agregar los <select> al contenedor de bailarinas
  document.getElementById("bailarinas-container-infantil").appendChild(tipoShowSelect);
  document.getElementById("bailarinas-container-infantil").appendChild(bailarinaSelect);

  // Agregar los <select> al contenedor de muñecos
  document.getElementById("munecos-container-infantil").appendChild(tipoShowSelect.cloneNode(true));
  document.getElementById("munecos-container-infantil").appendChild(munecoSelect);

  // Agregar event listener al <select> de la cantidad de bailarinas
  bailarinaSelect.addEventListener("change", function () {
    const cantidadBailarinas = parseInt(bailarinaSelect.value);
    document.getElementById("bailarinas-container-infantil").innerHTML = ""; // Limpiar el contenedor antes de agregar los nuevos elementos

    // Crear los <input> para los nombres de las bailarinas
    for (let i = 1; i <= cantidadBailarinas; i++) {
      const label = document.createElement("label");
      label.textContent = `Nombre Bailarina ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.id = `nombre-bailarina-${i}`;
      input.name = `nombre-bailarina-${i}`;

      document.getElementById("bailarinas-container-infantil").appendChild(label);
      document.getElementById("bailarinas-container-infantil").appendChild(input);
    }
  });

  // Agregar event listener al <select> de la cantidad de muñecos
  munecoSelect.addEventListener("change", function () {
    const cantidadMunecos = parseInt(munecoSelect.value);
    document.getElementById("munecos-container-infantil").innerHTML = ""; // Limpiar el contenedor antes de agregar los nuevos elementos

    // Crear los <input> para los nombres de los muñecos
    for (let i = 1; i <= cantidadMunecos; i++) {
      const label = document.createElement("label");
      label.textContent = `Nombre Muñeco ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.id = `nombre-muneco-${i}`;
      input.name = `nombre-muneco-${i}`;

      document.getElementById("munecos-container-infantil").appendChild(label);
      document.getElementById("munecos-container-infantil").appendChild(input);
    }
  });
});

const horallegadaBabyInput = document.getElementById("horallegadababy");
const horasalidaBabyInput = document.getElementById("horasalidababy");
const horallegadaShowBabyInput = document.getElementById("horallegadashowbaby");
const horacomienzoShowBabyInput = document.getElementById("horacomienzoshowbaby");

horallegadaBabyInput.addEventListener("input", function () {
  const horallegada = horallegadaBabyInput.value;
  const horaSalida = sumarMinutosBaby(horallegada, 30);
  const horaLlegadaShow = sumarMinutosBaby(horaSalida, 30);
  const horaComienzoShow = sumarMinutosBaby(horaLlegadaShow, 30);

  horasalidaBabyInput.value = horaSalida;
  horallegadaShowBabyInput.value = horaLlegadaShow;
  horacomienzoShowBabyInput.value = horaComienzoShow;
});

function sumarMinutosBaby(hora, minutos) {
  const [hh, mm] = hora.split(":");
  const date = new Date();
  date.setHours(hh);
  date.setMinutes(mm);
  date.setMinutes(date.getMinutes() + minutos);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const horallegadaInfantilInput = document.getElementById("horallegadainfantil");
const horasalidaInfantilInput = document.getElementById("horasalidainfantil");
const horallegadaShowInfantilInput = document.getElementById("horallegadashowinfantil");
const horacomienzoShowInfantilInput = document.getElementById("horacomienzoshowinfantil");

horallegadaInfantilInput.addEventListener("input", function () {
  const horallegada = horallegadaInfantilInput.value;
  const horaSalida = sumarMinutosInfantil(horallegada, 30);
  const horaLlegadaShow = sumarMinutosInfantil(horaSalida, 30);
  const horaComienzoShow = sumarMinutosInfantil(horaLlegadaShow, 30);

  horasalidaInfantilInput.value = horaSalida;
  horallegadaShowInfantilInput.value = horaLlegadaShow;
  horacomienzoShowInfantilInput.value = horaComienzoShow;
});

function sumarMinutosInfantil(hora, minutos) {
  const [hh, mm] = hora.split(":");
  const date = new Date();
  date.setHours(hh);
  date.setMinutes(mm);
  date.setMinutes(date.getMinutes() + minutos);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}