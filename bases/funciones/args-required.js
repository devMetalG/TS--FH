"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}, ${lastName}`;
    };
    const name = fullName('Guillermo', 'Franco');
    console.log({ name });
})();
