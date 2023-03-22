class Persona {
  nombre;
  peso;
  altura;
  edad;
  cedula;
  constructor(nombre, peso, altura, edad, cedula) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.cedula = cedula;
  }

  imc_personas() {
    const imc = (this.peso / this.altura) * this.altura;
    return imc;
  }

  info() {
     console.log(`Su nombre es ${this.nombre} con cedula ${this.cedula}`);
  }
}

const yeffer = new Persona("Yeffer", 55, 1.6, 19, 1100110011);
const andres = new Persona("camilo", 1.75, 2.4, 22, 11001100);
const Maruchan = new Persona("Maruchan", 1.2, 0.5, 50, 1100110011);
const { nombre } = yeffer;
const { peso } = yeffer;
const { estatura } = yeffer;
const { edad } = yeffer;
console.log(yeffer.imc_personas());
console.log(yeffer.info());
