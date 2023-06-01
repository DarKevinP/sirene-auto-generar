// Obtener elementos del DOM
const showInfantilBtn = document.getElementById("show-infantil-btn");
const babyShowerBtn = document.getElementById("baby-shower-btn");
const showInfantilSection = document.getElementById("show-infantil-section");
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
const generarShowInfantilBasicoBtn = document.getElementById(
  "generar-show-infantil-btn-basico"
);
const generarShowInfantilBailarinaBtn = document.getElementById(
  "generar-show-infantil-btn-bailarina"
);
const generarShowInfantilGrandeBtn = document.getElementById(
  "generar-show-infantil-btn-grande"
);
const generarBabyShowerBtn = document.getElementById("generar-baby-shower-btn");
const textoGeneradoTextarea = document.getElementById("texto-generado");

// Mostrar sección correspondiente al botón seleccionado
showInfantilBtn.addEventListener("click", function () {
  showInfantilSection.style.display = "block";
  babyShowerSection.style.display = "none";
  document.getElementById("generar-show-infantil-btn-basico").style.display = "block";
  document.getElementById("generar-show-infantil-btn-bailarina").style.display = "none";
  document.getElementById("generar-show-infantil-btn-grande").style.display = "none";
});

babyShowerBtn.addEventListener("click", function () {
  showInfantilSection.style.display = "none";
  babyShowerSection.style.display = "block";
});

// Mostrar campos adicionales dependiendo del tipo de show infantil seleccionado
showBasicoBtn.addEventListener("click", function () {
  animadoresContainerInfantil.innerHTML = "";
  document.getElementById("generar-show-infantil-btn-basico").style.display = "block";
  document.getElementById("generar-show-infantil-btn-bailarina").style.display = "none";
  document.getElementById("generar-show-infantil-btn-grande").style.display = "none";
});

showBailarinaBtn.addEventListener("click", function () {
  animadoresContainerInfantil.innerHTML = "";
  document.getElementById("generar-show-infantil-btn-basico").style.display = "none";
  document.getElementById("generar-show-infantil-btn-bailarina").style.display = "block";
  document.getElementById("generar-show-infantil-btn-grande").style.display = "none";
});

showGrandeBtn.addEventListener("click", function () {
  animadoresContainerInfantil.innerHTML = "";
  document.getElementById("generar-show-infantil-btn-basico").style.display = "none";
  document.getElementById("generar-show-infantil-btn-bailarina").style.display = "none";
  document.getElementById("generar-show-infantil-btn-grande").style.display = "block";
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
generarShowInfantilBasicoBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var cantidadAnimadores = document.getElementById("cantidad-animadores-infantil").value;
  var tipoShow = document.getElementById("tipo-show-infantil").value;
  var direccion = document.getElementById("direccioninfantil").value;
  var fecha = document.getElementById("fechainfantil").value;
  var horaLlegadaSirene = document.getElementById("horallegadainfantil").value;
  var horaSalidaSirene = document.getElementById("horasalidainfantil").value;
  var horaLlegadaShow = document.getElementById("horallegadashowinfantil").value;
  var horaComienzoShow = document.getElementById("horacomienzoshowinfantil").value;
  var tipoAnimadora = document.getElementById("tipoinfantil").value;
  var nombreDJ = document.getElementById("nombredj-infantil").value;
  var nombreCumpleanero = document.getElementById("nombre-cumpleanero").value;
  var edades = document.getElementById("edadesinfantil").value;
  var tematica = document.getElementById("tematica").value;
  var nombrePapa = document.getElementById("papainfantil").value;
  var nombreMama = document.getElementById("mamainfantil").value;
  var nombreContacto1 = document.getElementById("nombrecontactoinfantil1").value;
  var celularContacto1 = document.getElementById("celularcontactoinfantil1").value;
  var nombreContacto2 = document.getElementById("nombrecontactoinfantil2").value;
  var celularContacto2 = document.getElementById("celularcontactoinfantil2").value;
  var saldo = document.getElementById("saldoinfantil").value;
  var movilidades = document.getElementById("movilidadesinfantil").value;
  var comentario = document.getElementById("comentarioinfantil").value;

  var animadoresContainer = document.getElementById("animadores-container-infantil");
  var animadores = [];
  for (var i = 0; i < cantidadAnimadores; i++) {
    var animadorElement = animadoresContainer.querySelector("input[name='nombre-animador-infantil-" + (i + 1) + "']");
    var animador = animadorElement.value;
    animadores.push(animador);
  }

  var textoGenerado = "Show basico" + "\n";
  textoGenerado += "Tipo de lugar: " + tipoShow + "\n";
  textoGenerado += "Dirección: " + direccion + "\n\n";
  textoGenerado += "Fecha(A/M/D): " + fecha + "\n";
  textoGenerado += "Hora de llegada a Sirene: " + horaLlegadaSirene + "\n";
  textoGenerado += "Hora de salida de Sirene: " + horaSalidaSirene + "\n";
  textoGenerado += "Hora de llegada al show: " + horaLlegadaShow + "\n";
  textoGenerado += "Hora de comienzo del show: " + horaComienzoShow + "\n\n";
  textoGenerado += "Tipo de animadora/es: " + tipoAnimadora + "\n";
  for (var j = 0; j < animadores.length; j++) {
    textoGenerado += "Animador/a " + (j + 1) + ": " + animadores[j] + "\n";
  }
  textoGenerado += "Nombre del DJ: " + nombreDJ + "\n\n";
  textoGenerado += "Nombre y edad del cumpleañer@: " + nombreCumpleanero + "\n";
  textoGenerado += "Edades: " + edades + "\n";
  textoGenerado += "Tematica: " + tematica + "\n";
  textoGenerado += "Nombre del Papá: " + nombrePapa + "\n";
  textoGenerado += "Nombre de la Mamá: " + nombreMama + "\n\n";
  textoGenerado += "Nombre Contacto 1: " + nombreContacto1 + "\n";
  textoGenerado += "Celular Contacto 1: " + celularContacto1 + "\n";
  textoGenerado += "Nombre Contacto 2: " + nombreContacto2 + "\n";
  textoGenerado += "Celular Contacto 2: " + celularContacto2 + "\n";
  if (movilidades == 1) {
    textoGenerado += `Saldo: ${saldo} + movilidades \n`;
  } else {
    textoGenerado += `Saldo: ${saldo}, movilidades ya pagadas\n`;
  }
  textoGenerado += "Comentario: " + comentario + "\n";

  document.getElementById("texto-generado").value = textoGenerado;
});

// Generar texto correspondiente al show infantil seleccionado
generarShowInfantilBailarinaBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var cantidadAnimadores = document.getElementById("cantidad-animadores-infantil").value;
  var tipoShow = document.getElementById("tipo-show-infantil").value;
  var direccion = document.getElementById("direccioninfantil").value;
  var fecha = document.getElementById("fechainfantil").value;
  var horaLlegadaSirene = document.getElementById("horallegadainfantil").value;
  var horaSalidaSirene = document.getElementById("horasalidainfantil").value;
  var horaLlegadaShow = document.getElementById("horallegadashowinfantil").value;
  var horaComienzoShow = document.getElementById("horacomienzoshowinfantil").value;
  var tipoAnimadora = document.getElementById("tipoinfantil").value;
  var nombreDJ = document.getElementById("nombredj-infantil").value;
  var nombreCumpleanero = document.getElementById("nombre-cumpleanero").value;
  var edades = document.getElementById("edadesinfantil").value;
  var tematica = document.getElementById("tematica").value;
  var nombrePapa = document.getElementById("papainfantil").value;
  var nombreMama = document.getElementById("mamainfantil").value;
  var nombreContacto1 = document.getElementById("nombrecontactoinfantil1").value;
  var celularContacto1 = document.getElementById("celularcontactoinfantil1").value;
  var nombreContacto2 = document.getElementById("nombrecontactoinfantil2").value;
  var celularContacto2 = document.getElementById("celularcontactoinfantil2").value;
  var saldo = document.getElementById("saldoinfantil").value;
  var movilidades = document.getElementById("movilidadesinfantil").value;
  var comentario = document.getElementById("comentarioinfantil").value;

  var animadoresContainer = document.getElementById("animadores-container-infantil");
  var animadores = [];
  for (var i = 0; i < cantidadAnimadores; i++) {
    var animadorElement = animadoresContainer.querySelector("input[name='nombre-animador-infantil-" + (i + 1) + "']");
    var animador = animadorElement.value;
    animadores.push(animador);
  }

  var bailarinasContainer = document.getElementById("bailarinas-container-infantil");
  var bailarinasSelect = document.getElementById("bailarina-select");
  var bailarinaOptions = bailarinasSelect.getElementsByTagName("option");
  var cantidadBailarinas = bailarinaOptions[bailarinasSelect.selectedIndex].text.split(" ")[0];

  var textoGenerado = "Show solo con bailarina/s" + "\n";
  textoGenerado += "Tipo de lugar: " + tipoShow + "\n";
  textoGenerado += "Dirección: " + direccion + "\n\n";
  textoGenerado += "Fecha(A/M/D): " + fecha + "\n";
  textoGenerado += "Hora de llegada a Sirene: " + horaLlegadaSirene + "\n";
  textoGenerado += "Hora de salida de Sirene: " + horaSalidaSirene + "\n";
  textoGenerado += "Hora de llegada al show: " + horaLlegadaShow + "\n";
  textoGenerado += "Hora de comienzo del show: " + horaComienzoShow + "\n\n";
  textoGenerado += "Tipo de animadora/es: " + tipoAnimadora + "\n";
  for (var j = 0; j < animadores.length; j++) {
    textoGenerado += "Animador/a " + (j + 1) + ": " + animadores[j] + "\n";
  }
  for (var i = 1; i <= cantidadBailarinas; i++) {
    var nombreBailarina = document.getElementById("nombre-bailarina-" + i).value;
    textoGenerado += "Bailarina " + i + ": " + nombreBailarina + "\n";
  }
  textoGenerado += "Nombre del DJ: " + nombreDJ + "\n\n";
  textoGenerado += "Nombre y edad del cumpleañer@: " + nombreCumpleanero + "\n";
  textoGenerado += "Edades: " + edades + "\n";
  textoGenerado += "Tematica: " + tematica + "\n";
  textoGenerado += "Nombre del Papá: " + nombrePapa + "\n";
  textoGenerado += "Nombre de la Mamá: " + nombreMama + "\n\n";
  textoGenerado += "Nombre Contacto 1: " + nombreContacto1 + "\n";
  textoGenerado += "Celular Contacto 1: " + celularContacto1 + "\n";
  textoGenerado += "Nombre Contacto 2: " + nombreContacto2 + "\n";
  textoGenerado += "Celular Contacto 2: " + celularContacto2 + "\n";
  if (movilidades == 1) {
    textoGenerado += `Saldo: ${saldo} + movilidades \n`;
  } else {
    textoGenerado += `Saldo: ${saldo}, movilidades ya pagadas\n`;
  }
  textoGenerado += "Comentario: " + comentario + "\n";

  



  document.getElementById("texto-generado").value = textoGenerado;
});
// Generar texto correspondiente al show infantil seleccionado
generarShowInfantilGrandeBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var cantidadAnimadores = document.getElementById("cantidad-animadores-infantil").value;
  var tipoShow = document.getElementById("tipo-show-infantil").value;
  var direccion = document.getElementById("direccioninfantil").value;
  var fecha = document.getElementById("fechainfantil").value;
  var horaLlegadaSirene = document.getElementById("horallegadainfantil").value;
  var horaSalidaSirene = document.getElementById("horasalidainfantil").value;
  var horaLlegadaShow = document.getElementById("horallegadashowinfantil").value;
  var horaComienzoShow = document.getElementById("horacomienzoshowinfantil").value;
  var tipoAnimadora = document.getElementById("tipoinfantil").value;
  var nombreDJ = document.getElementById("nombredj-infantil").value;
  var nombreCumpleanero = document.getElementById("nombre-cumpleanero").value;
  var edades = document.getElementById("edadesinfantil").value;
  var tematica = document.getElementById("tematica").value;
  var nombrePapa = document.getElementById("papainfantil").value;
  var nombreMama = document.getElementById("mamainfantil").value;
  var nombreContacto1 = document.getElementById("nombrecontactoinfantil1").value;
  var celularContacto1 = document.getElementById("celularcontactoinfantil1").value;
  var nombreContacto2 = document.getElementById("nombrecontactoinfantil2").value;
  var celularContacto2 = document.getElementById("celularcontactoinfantil2").value;
  var saldo = document.getElementById("saldoinfantil").value;
  var movilidades = document.getElementById("movilidadesinfantil").value;
  var comentario = document.getElementById("comentarioinfantil").value;

  var animadoresContainer = document.getElementById("animadores-container-infantil");
  var animadorInputs = animadoresContainer.getElementsByTagName("input");
  var cantidadAnimadoresContainer = document.getElementById("cantidad-animadores-infantil");
  var cantidadAnimadoresValue = cantidadAnimadoresContainer.options[cantidadAnimadoresContainer.selectedIndex].value;

  var bailarinasContainer = document.getElementById("bailarinas-container-infantil");
  var bailarinasSelect = document.getElementById("bailarina-select");
  var bailarinaOptions = bailarinasSelect.getElementsByTagName("option");
  var cantidadBailarinas = bailarinaOptions[bailarinasSelect.selectedIndex].text.split(" ")[0];

  var munecosContainer = document.getElementById("munecos-container-infantil");
  var munecoSelect = document.getElementById("muneco-select");
  var munecoOptions = munecoSelect.getElementsByTagName("option");
  var cantidadMunecos = munecoOptions[munecoSelect.selectedIndex].text.split(" ")[0];

  var tipoShowGrande = document.getElementById("tipo-show-select").value;

  var textoGenerado = "Tipo de show grande: " + tipoShowGrande + "\n";
  textoGenerado += "Tipo de lugar: " + tipoShow + "\n";
  textoGenerado += "Dirección: " + direccion + "\n\n";
  textoGenerado += "Fecha(A/M/D): " + fecha + "\n";
  textoGenerado += "Hora de llegada a Sirene: " + horaLlegadaSirene + "\n";
  textoGenerado += "Hora de salida de Sirene: " + horaSalidaSirene + "\n";
  textoGenerado += "Hora de llegada al show: " + horaLlegadaShow + "\n";
  textoGenerado += "Hora de comienzo del show: " + horaComienzoShow + "\n\n";
  textoGenerado += "Tipo de animadora/es: " + tipoAnimadora + "\n";
  for (var i = 0; i < cantidadAnimadoresValue; i++) {
    var nombreAnimador = animadorInputs[i].value;
    textoGenerado += "Nombre Animador " + (i + 1) + ": " + nombreAnimador + "\n";
  }
  for (var i = 1; i <= cantidadBailarinas; i++) {
    var nombreBailarina = document.getElementById("nombre-bailarina-" + i).value;
    textoGenerado += "Nombre Bailarina " + i + ": " + nombreBailarina + "\n";
  }
  for (var i = 1; i <= cantidadMunecos; i++) {
    var nombreMuneco = document.getElementById("nombre-muneco-" + i).value;
    textoGenerado += "Nombre Muñeco " + i + ": " + nombreMuneco + "\n";
  }
  textoGenerado += "Nombre del DJ: " + nombreDJ + "\n\n";
  textoGenerado += "Nombre y edad del cumpleañer@: " + nombreCumpleanero + "\n";
  textoGenerado += "Edades: " + edades + "\n";
  textoGenerado += "Tematica: " + tematica + "\n";
  textoGenerado += "Nombre del Papá: " + nombrePapa + "\n";
  textoGenerado += "Nombre de la Mamá: " + nombreMama + "\n\n";
  textoGenerado += "Nombre Contacto 1: " + nombreContacto1 + "\n";
  textoGenerado += "Celular Contacto 1: " + celularContacto1 + "\n";
  textoGenerado += "Nombre Contacto 2: " + nombreContacto2 + "\n";
  textoGenerado += "Celular Contacto 2: " + celularContacto2 + "\n";
  if (movilidades == 1) {
    textoGenerado += `Saldo: ${saldo} + movilidades \n`;
  } else {
    textoGenerado += `Saldo: ${saldo}, movilidades ya pagadas\n`;
  }
  textoGenerado += "Comentario: " + comentario + "\n";
  document.getElementById("texto-generado").value = textoGenerado;
});

// Generar texto correspondiente al baby shower seleccionado
generarBabyShowerBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const cantidadAnimadores = parseInt(cantidadAnimadoresBabySelect.value);

  let textoGenerado = `-Baby Shower-\n`; //+`Cantidad de animadores: ${cantidadAnimadores}\n`;

  const tipoShowBaby = document.getElementById("tipo-show-baby").value;
  const direccionBaby = document.getElementById("direccionbaby").value;
  const fechaBaby = document.getElementById("fechababy").value;
  const horaLlegadaBaby = document.getElementById("horallegadababy").value;
  const horaSalidaBaby = document.getElementById("horasalidababy").value;
  const horaLlegadaShowBaby = document.getElementById(
    "horallegadashowbaby"
  ).value;
  const horaComienzoShowBaby = document.getElementById(
    "horacomienzoshowbaby"
  ).value;
  const tipoAnimadoraBaby = document.getElementById("tipobaby").value;
  const nombreDjBaby = document.getElementById("nombredj-baby").value;
  const papaBaby = document.getElementById("papababy").value;
  const mamaBaby = document.getElementById("mamababy").value;
  const bebeBaby = document.getElementById("bebebaby").value;
  const nombreContacto1Baby = document.getElementById(
    "nombrecontactobaby1"
  ).value;
  const celularContacto1Baby = document.getElementById(
    "celularcontactobaby1"
  ).value;
  const nombreContacto2Baby = document.getElementById(
    "nombrecontactobaby2"
  ).value;
  const celularContacto2Baby = document.getElementById(
    "celularcontactobaby2"
  ).value;
  const saldoBaby = document.getElementById("saldobaby").value;
  const movilidadesBaby = document.getElementById("movilidadesbaby").value;
  const comentarioBaby = document.getElementById("comentariobaby").value;

  // Obtener los nombres de los animadores
  const animadoresContainerBaby = document.getElementById(
    "animadores-container-baby"
  );
  const animadoresInputs =
    animadoresContainerBaby.getElementsByTagName("input");
  let nombresAnimadores = "";
  for (let i = 0; i < animadoresInputs.length; i++) {
    const nombreAnimador = animadoresInputs[i].value;
    nombresAnimadores += `Animador/a ${i + 1}: ${nombreAnimador}\n`;
  }

  textoGenerado += `Tipo de lugar: ${tipoShowBaby}\n`;
  textoGenerado += `Direccion: ${direccionBaby}\n\n`;
  textoGenerado += `Fecha(A/M/D): ${fechaBaby}\n`;
  textoGenerado += `Hora de llegada a Sirene: ${horaLlegadaBaby}\n`;
  textoGenerado += `Hora de salida de Sirene: ${horaSalidaBaby}\n`;
  textoGenerado += `Hora de llegada al show: ${horaLlegadaShowBaby}\n`;
  textoGenerado += `Hora de comienzo del show: ${horaComienzoShowBaby}\n\n`;
  textoGenerado += `Tipo de animadora/es: ${tipoAnimadoraBaby}\n`;

  // Insertar los nombres de los animadores antes de "Nombre DJ"
  textoGenerado += nombresAnimadores;

  textoGenerado += `Nombre del DJ: ${nombreDjBaby}\n\n`;
  textoGenerado += `Papá: ${papaBaby}\n`;
  textoGenerado += `Mamá: ${mamaBaby}\n`;
  textoGenerado += `Nombre del futuro bebe: ${bebeBaby}\n\n`;
  textoGenerado += "Nombre Contacto 1: " + nombreContacto1Baby + "\n";
  textoGenerado += "Celular Contacto 1: " + celularContacto1Baby + "\n";
  textoGenerado += "Nombre Contacto 2: " + nombreContacto2Baby + "\n";
  textoGenerado += "Celular Contacto 2: " + celularContacto2Baby + "\n";
  if (movilidadesBaby == 1) {
    textoGenerado += `Saldo: ${saldoBaby} + movilidades \n`;
  } else {
    textoGenerado += `Saldo: ${saldoBaby}, movilidades ya pagadas\n`;
  }
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
  document.getElementById("munecos-container-infantil-select").innerHTML = "";
  document.getElementById("bailarinas-container-infantil-select").innerHTML =
    "";
  document.getElementById("bailarinas-container-infantil").innerHTML = "";
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
  document.getElementById("bailarinas-container-infantil").innerHTML = "";
  document.getElementById("show-grande-tipo").innerHTML = "";

  // Eliminar los elementos <label> e <input> existentes en el contenedor
  const elementosAnteriores = document.querySelectorAll(
    "#bailarinas-container-infantil label, #bailarinas-container-infantil input"
  );
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
    defaultOption.textContent = "Escoja la cantidad de bailarinas";
    bailarinaSelect.appendChild(defaultOption);
    // Agregar el <select> al contenedor de bailarinas
    document
      .getElementById("bailarinas-container-infantil")
      .appendChild(bailarinaSelect);
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
    const elementosAnteriores = document.querySelectorAll(
      "#bailarinas-container-infantil label, #bailarinas-container-infantil input"
    );
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

      document
        .getElementById("bailarinas-container-infantil")
        .appendChild(label);
      document
        .getElementById("bailarinas-container-infantil")
        .appendChild(input);
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
  document.getElementById("bailarinas-container-infantil").innerHTML = "";
  document.getElementById("show-grande-tipo").innerHTML = "";

  // Crear el elemento <select> para el tipo de show
  const tipoShowSelect = document.createElement("select");
  tipoShowSelect.id = "tipo-show-select";

  // Agregar opciones al <select> para el tipo de show
  const options = [
    "Show de magia",
    "Show de magia y burbujas",
    "Show de magia, burbujas y cientifico",
    "Show de cientifico",
  ];
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.value = options[i];
    option.textContent = options[i];
    tipoShowSelect.appendChild(option);
  }
  // Crear el elemento <select> si no existe
  let bailarinaSelect = document.querySelector("#bailarina-select");
  if (!bailarinaSelect) {
    bailarinaSelect = document.createElement("select");
    bailarinaSelect.id = "bailarina-select";
    // Agregar opción por defecto al <select>
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Escoja la cantidad de bailarinas";
    bailarinaSelect.appendChild(defaultOption);
    // Agregar el <select> al contenedor de bailarinas
    document
      .getElementById("bailarinas-container-infantil")
      .appendChild(bailarinaSelect);
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
    const elementosAnteriores = document.querySelectorAll(
      "#bailarinas-container-infantil label, #bailarinas-container-infantil input"
    );
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

      document
        .getElementById("bailarinas-container-infantil")
        .appendChild(label);
      document
        .getElementById("bailarinas-container-infantil")
        .appendChild(input);
    }
  });
  //!MUÑECOOOOO
  let munecoSelect = document.getElementById("muneco-select");
  if (!munecoSelect) {
    munecoSelect = document.createElement("select");
    munecoSelect.id = "muneco-select";
    // Agregar opción por defecto al <select>
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Escoja la cantidad de muñecos";
    defaultOption.disabled = false;
    defaultOption.selected = true;
    munecoSelect.appendChild(defaultOption);
    // Agregar el <select> al contenedor de muñecos
    document
      .getElementById("munecos-container-infantil")
      .appendChild(munecoSelect);
  } else {
    // Eliminar las opciones existentes en el <select>
    munecoSelect.innerHTML = "";
    // Agregar opción por defecto al <select> nuevamente
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Escoja la cantidad de muñecos";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    munecoSelect.appendChild(defaultOption);
  }

  // Agregar opciones al <select> para la cantidad de muñecos
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i} muñeco/s seleccionado/s`;
    munecoSelect.appendChild(option);
  }

  // Agregar event listener al <select>
  munecoSelect.addEventListener("change", function () {
    const cantidadMunecos = parseInt(munecoSelect.value);

    // Eliminar los elementos <label> e <input> existentes en el contenedor
    const elementosAnteriores = document.querySelectorAll(
      "#munecos-container-infantil label, #munecos-container-infantil input"
    );
    elementosAnteriores.forEach((elemento) => {
      elemento.remove();
    });

    // Crear los <input> para los nombres de los muñecos
    for (let i = 1; i <= cantidadMunecos; i++) {
      const label = document.createElement("label");
      label.textContent = `Nombre persona y Nombre Muñeco ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.id = `nombre-muneco-${i}`;
      input.name = `nombre-muneco-${i}`;

      document.getElementById("munecos-container-infantil").appendChild(label);
      document.getElementById("munecos-container-infantil").appendChild(input);
    }
  });

  // Agregar los <select> al contenedor de bailarinas
  document.getElementById("show-grande-tipo").appendChild(tipoShowSelect);
  document
    .getElementById("bailarinas-container-infantil-select")
    .appendChild(bailarinaSelect);

  // Agregar los <select> al contenedor de muñecos
  document
    .getElementById("munecos-container-infantil-select")
    .appendChild(munecoSelect);

  // const bailarinaSelect = document.getElementById("bailarinaSelect");
  const contenedorInfantil = document.getElementById(
    "bailarinas-container-infantil"
  );

  bailarinaSelect.addEventListener("change", function () {
    const cantidadBailarinas = parseInt(bailarinaSelect.value);
    document.getElementById("bailarinas-container-infantil").innerHTML = ""; // Limpiar el contenedor antes de agregar los nuevos elementos

    // Vaciar el contenedor, excepto el bailarinaSelect clonado
    while (contenedorInfantil.firstChild) {
      if (contenedorInfantil.firstChild !== bailarinaSelectClonado) {
        contenedorInfantil.removeChild(contenedorInfantil.firstChild);
      } else {
        break;
      }
    }

    // Crear los <input> para los nombres de las bailarinas
    for (let i = 1; i <= cantidadBailarinas; i++) {
      const label = document.createElement("label");
      label.textContent = `Nombre Bailarina ${i}:`;
      const input = document.createElement("input");
      input.type = "text";
      input.id = `nombre-bailarina-${i}`;
      input.name = `nombre-bailarina-${i}`;

      contenedorInfantil.appendChild(label);
      contenedorInfantil.appendChild(input);
    }

    // Volver a agregar el bailarinaSelect clonado al contenedor
    contenedorInfantil.appendChild(bailarinaSelectClonado);
  });


});

const horallegadaBabyInput = document.getElementById("horallegadababy");
const horasalidaBabyInput = document.getElementById("horasalidababy");
const horallegadaShowBabyInput = document.getElementById("horallegadashowbaby");
const horacomienzoShowBabyInput = document.getElementById(
  "horacomienzoshowbaby"
);

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
const horallegadaShowInfantilInput = document.getElementById(
  "horallegadashowinfantil"
);
const horacomienzoShowInfantilInput = document.getElementById(
  "horacomienzoshowinfantil"
);

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
