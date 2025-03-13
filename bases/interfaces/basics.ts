(()=> {

  interface Hero {
    name   : string;
    age    : Number;
    powers : string[];
    getName?: ()=>string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 26,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }
  
  let superman: Hero = {
    name: 'Clark Kent',
    age: 26,
    powers: ['Super velocidad'],
    getName() {
        return this.name
    },
  }

})()