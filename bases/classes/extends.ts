(()=>{

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ){
      console.log('Constructor Avenger llamado')
    }

    private getFullName (){
      return `${this.name} - ${this.realName}`
    }
  }

  class Xmen extends Avenger {
  }


  const wolverine = new Xmen('Wolverine', 'Logan')
  console.log(wolverine)
})()