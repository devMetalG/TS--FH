(()=>{
  const fullName = (firstName:string, lastName?:string):string => {
    return `${firstName}, ${lastName || 'No lastName'}`;
  }

  const name = fullName('Guillermo');
  console.log({name})
})()