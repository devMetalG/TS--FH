// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar():void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Joker {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface numberOfCitizens {
  (ciudadanos: string[]): number;
}

const ciudadGotica: numberOfCitizens = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
type sex = 'male' | 'female';
type maritalStatus = 'married' | 'single' | 'divorced' | 'vidower';
interface Person {
  name: string;
  age: number;
  sex: sex,
  maritalStatus: maritalStatus
  imprimirBio():void
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person{
  public name: string;
  public age: number;
  public sex: sex;
  public maritalStatus: maritalStatus;
  constructor(
    name: string,
    age: number,
    sex: sex,
    maritalStatus: maritalStatus,
  ){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.maritalStatus = maritalStatus;
  }
  imprimirBio(): void {
      console.log(`This person's name is ${this.name},  has ${this.age}`)
  }
}