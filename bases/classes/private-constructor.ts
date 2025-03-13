(()=> {

  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string){}

    static callApocalipsis(): Apocalipsis{
      if (!Apocalipsis.instance){
        Apocalipsis.instance = new Apocalipsis('Apocalipsis')
      }
      return this.instance;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis()

  // const apocalipsis = new Apocalipsis('Apocalipsis')
})()