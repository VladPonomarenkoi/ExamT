const getTaskArithmeticProgression = require('./index.js');


test('Arithmetic progression of n=2 equals 4', () => {
    expect(getTaskArithmeticProgression(2)).toBe(4)
})

test('Arithmetic progression of n=4 equals 16', () => {
    expect(getTaskArithmeticProgression(4)).toBe(16)
})

test('Arithmetic progression of n=6 equals 36', () => {
    expect(getTaskArithmeticProgression(6)).toBe(36)
})

test('Arithmetic progression of n=8 equals 64', () => {
    expect(getTaskArithmeticProgression(8)).toBe(64)
})
