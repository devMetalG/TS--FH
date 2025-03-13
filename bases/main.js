"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 26,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 26,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const client = {
        name: 'Guillermo',
        age: 26,
        address: {
            id: 124,
            zip: 'HYZ 1WS',
            city: 'Leon'
        },
        getFullAdress(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Joel',
        age: 24,
        address: {
            id: 124,
            zip: 'HYZ 1WS',
            city: 'Leon'
        },
        getFullAdress(id) {
            return this.address.city;
        },
    };
})();
//# sourceMappingURL=main.js.map