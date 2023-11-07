const {mul} = require('./mul');
test('Multiplicacion', () =>{
    expect(mul(3,4)).toBe(12);
});