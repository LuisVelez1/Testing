const {rest} = require('./rest');
test('Resta', () => {
    expect(rest(6,3)).toBe(3);
});