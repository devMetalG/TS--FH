"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(name, age, sex, maritalStatus) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.maritalStatus = maritalStatus;
    }
    imprimirBio() {
        console.log(`This person's name is ${this.name},  has ${this.age}`);
    }
}
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
    class Mutant {
        constructor(name, realName, age) {
            this.name = name;
            this.realName = realName;
            this.age = age;
        }
        mutantPower(id) {
            return `${this.name} - ${this.realName}`;
        }
    }
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
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map