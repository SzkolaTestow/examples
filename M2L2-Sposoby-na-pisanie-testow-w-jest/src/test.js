const division = (a, b) => +(a / b).toFixed(2);

describe('division', () => {
    it(`divides 5 by 2`, () => {
        const result = division(5, 2);
        const expected = 2.5;

        expect(result).toBe(expected);
    })
    it(`divides 50 by -10`, () => {
        const result = division(50, -10);
        const expected = -5;

        expect(result).toBe(expected);
    })
    it(`divides -15 by -3`, () => {
        const result = division(-15, -3);
        const expected = 5;

        expect(result).toBe(expected);
    })
    it(`divides 12.5 by 10`, () => {
        const result = division(12.5, 10);
        const expected = 1.25;

        expect(result).toBe(expected);
    })
    it(`divides 45 by -9`, () => {
        const result = division(45, -9);
        const expected = -5;

        expect(result).toBe(expected);
    })
    it.skip(`divides 20 by 3 and rounds at most 2 decimal places`, () => {
        const result = division(20, 3);
        const expected = 6.67

        expect(result).toBe(expected);
    })
    it.todo('divides numbers by 0 and...')
});

describe.skip('skipped', () => {
    it('empty test', () => {});
})

describe('with only', () => {
    it.only('empty test - 1', () => {})
    it('empty test - 2', () => {

    });
})
