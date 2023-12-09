(()=>{
  const fullName = (firstName:string, lastName:string):string => {
    return `${firstName}, ${lastName}`;
  }

  const name = fullName('Guillermo', 'Franco');
  console.log({name})
})()