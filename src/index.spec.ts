import lib from './index';

describe('lib', () => {
    it('does something', async () => {
        const input = [1];
        const output = await lib(input);
        expect(output).toBe(input);
    });
});
