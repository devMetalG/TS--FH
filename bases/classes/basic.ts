(()=> {

  class Avenger {
    // private name: string;
    // public team: string;
    // public realName: string;

    // constructor(name: string, team: string, realName: string){
    //   this.name = name;
    //   this.team = team;
    //   this.realName = realName
    // }
    constructor(
      private name: string, 
      public team: string, 
      public realName: string
    ){}

    bio (){
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'cap', 'Scott Lang');
  // console.log(antman) 
  // console.log(antman.bio())
})()