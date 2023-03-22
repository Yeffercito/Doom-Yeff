console.log("hola");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const button = document.getElementById("button");
const caja = document.getElementById("caja");
const tabla_body = document.getElementById("tabla_body");
button.addEventListener("click", function () {
  if (validacion() == true) {
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(edad.value);
    tabla_body.innerHTML += `<tr>
                        <td>${nombre.value}</td>
                        <td>${apellido.value}</td>
                        <td>${edad.value}</td>
                    </tr>`;
    limpiar();
  }
});

function limpiar() {
  nombre.value = "";
  apellido.value = "";
  edad.value = "";
}

function validacion() {
  if (nombre.value == "" || apellido.value == "" || edad.value == "") {
    return false;
  }
  else{
    return true
  }
}
