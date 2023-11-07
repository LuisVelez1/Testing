const {concatenateStrings} = require('./concatenateStrings');
test('Contatenar dos strings', () =>{
    expect(concatenateStrings('Hello, ', 'world')).toBe('Hello, world');
});
    
test('Lanza un error si alguno de los argumentos no es una cadena', () => {
    expect(() => concatenateStrings('sapo', 145)).toThrowError(
      'Ambos argumentos deben ser cadenas de texto'
    );
  });  
