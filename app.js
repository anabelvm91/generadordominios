let pronoun = ['mi', 'tu', 'nuestro', 'el', 'la', 'su'];
let adj = ['super', 'mega', 'ultra', 'increíble', 'poderoso', 'travieso'];
let noun = ['gato', 'perro', 'dragón', 'hamster', 'tiburón', 'pato'];

for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            console.log(p + a + n + '.com');
        }
    }
}