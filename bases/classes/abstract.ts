(()=> {
  abstract class Mutant {
    constructor(
      public name: string,
      public realName: string
    ){}
  }

  class Xmen extends Mutant {
    salvarMundo(){
      return 'Mundo salvado';
    }
  }
  class Villian extends Mutant {
    conquistarMundo(){
      return 'Mundo conquistado';
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villian('Magneto', 'Erik');

  const printName = (character: Mutant) => {
    // console.log(character.realName)
  }

  printName(wolverine)
})()