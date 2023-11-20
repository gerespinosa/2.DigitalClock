let relojElemento = document.getElementById("reloj");

const actualizar = () => {
  let ahora = new Date();
  let hora = ahora.toTimeString();
  const horaArray = hora.split(" ");
  let horaMostrar = horaArray[0];
  reloj.innerHTML = horaMostrar;

  return horaMostrar;
};

setInterval(actualizar, 1000);
