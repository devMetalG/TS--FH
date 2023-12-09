"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName}, ${lastName || 'No lastName'}`;
    };
    const name = fullName('Guillermo');
    console.log({ name });
})();
