(()=> {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: true;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500
  }

  const { poder, vision } = avengers;
  // console.log(poder, vision.toUpperCase());
  const printAvenger = ({vision, ...rest}: Avengers) => {
    console.log(vision, rest);
  }
  // printAvenger(avengers);

  const avengersArr = ['Cap. America', 'Ironman', 'Hulk'];
  // const ironman = avengersArr[1]
  // console.log(ironman);
  const [ cap, ironman,] = avengersArr;

  // console.log(ironman, cap)
})()