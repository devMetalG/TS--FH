(()=>{
  const fullName = (firstName:string, lastName?:string, upper:boolean = false):string => {
    if (upper) {
      return `${firstName}, ${lastName || 'No lastName'}`.toUpperCase();
    } else {
      return `${firstName}, ${lastName || 'No lastName'}`;
    }
  }

  const name = fullName('Guillermo', 'Franco', true);
  console.log({name})
})()