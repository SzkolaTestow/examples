const {func} = require('./func');

test('toBe vs toEqual', () => {
    expect('siemanko').toEqual('siemanko');
    expect('siemanko').toBe('siemanko');

    expect(10+10).toBe(20);
    expect(30-10).toEqual(20);

    const a = {id: 2, name: 'Hello', new: {id: 3, description: "Opis fajny"}}
    const b = {id: 2, name: 'Hello', new: {id: 3, description: "Opis fajny"}}

    const c = a;

    expect(a).toEqual(b)
    expect(a).toBe(c)
    expect(a).not.toBe(b);
})

test('toThrow', () => {
   const result = () => func('notNumber')

    expect(result).toThrow()
    expect(result).toThrow('Provided parameter should be a number.')

   expect(() => func(20)).not.toThrow();
   expect(() => func('20')).not.toThrow();
})