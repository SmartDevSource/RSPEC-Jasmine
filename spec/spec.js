const sayHello = require('../sayhello');


describe("HelloService ", () => {
    it("Qui es-tu ? Quand on envoi pas de nom", () => {
        expect(sayHello()).toBe('Qui es-tu ?');
    });

    it("On envoie un prénom à la fonction", () => {
        expect(sayHello('Matthieu')).toBe('Bonjour Matthieu');
    });
});