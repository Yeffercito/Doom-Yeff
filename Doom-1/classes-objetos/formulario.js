class Persona {
  nombre;
  apellido;
  fecha_nacimiento;
  cedula;
  edad;
  constructor(nombre, apellido, fecha_nacimiento, cedula, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha_nacimiento;
    this.cedula = cedula;
    this.edad = 0
  }

  sacar_edad() {
    let today = new Date();
    let edad =
      parseInt(today.getFullYear()) -
      parseInt(String(this.fecha_nacimiento).substring(0, 4));
    return edad;
  }

  cumple_años() {
    let today = new Date();
    let anoactual = parseInt(today.getFullYear());
    let mesactual = parseInt(today.getMonth()) + 1;
    let diactual = parseInt(today.getDate());
    let ano = parseInt(String(this.fecha_nacimiento).substring(0, 4));
    let mes = parseInt(String(this.fecha_nacimiento).substring(6, 7));
    let dia = parseInt(String(this.fecha_nacimiento).substring(8, 10));
    let mayor = 0;
    let menor = 0;

    if (ano - anoactual == 0 && mes - mesactual == 0 && dia - diactual == 0) {
      return "Hoy";
    } else {
      return "Hoy no xd";
    }
  }

  nomb_comple() {
    let nombree = `${this.nombre} ${this.apellido}`;
    return nombree;
  }
}

const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const cedula = document.getElementById("cedula");
const nacimiento = document.getElementById("nacimiento");
const button = document.getElementById("button");
const tabla_body = document.getElementById("tabla_body");
let nombre1 = "";
let apellido1 = "";
let nacimiento1 = 0;
let cedula1 = 0;
let persona1;
let personas = [];
let cont = 0
button.addEventListener("click", function (e) {
 console.log(validacion());
  if (validacion() == false) {
    e.preventDefault()
    nombre1 = name.value;
    apellido1 = lastname.value;
    nacimiento1 = nacimiento.value;
    cedula1 = cedula.value;
    persona1 = new Persona(nombre1, apellido1, nacimiento1, cedula1);
    personas.push(persona1);
    tabla_body.innerHTML += `<tr>
    <td>${persona1.nomb_comple()}</td>
    <td>${persona1.cumple_años()}</td>
    </tr>`;
    cont++
    limpiar()
  }
});

function limpiar() {
  name.value = "";
  lastname.value = "";
  nacimiento.value = "";
  cedula.value = "";
}

function validacion() {
  if (name.value || lastname.value || nacimiento.value || cedula.value) {
    return false;
  }
  else {
    return true
  }
}

