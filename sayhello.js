const sayHello = (name) => { 
    if (!name) { 
        return  "Qui es-tu ?"
    } 
    return `Bonjour ${name}`;
}

module.exports = sayHello;