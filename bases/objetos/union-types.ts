(()=>{
  type Hero = {
    name   : string;
    age    : Number;
    powers : string[];
    getName?: ()=>string;
  }

  let myCustomVariable: (string | number | Hero) = 'Guillermo';
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'spiderman',
    age: 26,
    powers: ['Instinto aracnido']
  }
  
  console.log(typeof myCustomVariable);

})();