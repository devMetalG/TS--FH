(()=> {

  interface Client {
    name: string;
    age: number;
    address: Address,
    getFullAdress(id: string): string
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Guillermo',
    age: 26,
    address: {
      id: 124,
      zip: 'HYZ 1WS',
      city: 'Leon'
    },
    getFullAdress(id: string) {
        return this.address.city;
    },
  }

  const client2: Client = {
    name: 'Joel',
    age: 24,
    address: {
      id: 124,
      zip: 'HYZ 1WS',
      city: 'Leon'
    },
    getFullAdress(id: string) {
        return this.address.city;
    },
  }

})()