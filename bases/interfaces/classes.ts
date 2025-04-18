(()=> {

  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;

    constructor(
      name: string,
      realName: string,
      age: number
    ){
      this.name = name;
      this.realName = realName;
      this.age = age;
    }

    mutantPower(id: number): string {
        return `${this.name} - ${this.realName}`
    }
  }

})()