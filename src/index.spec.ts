import lib from './index';

describe('lib', () => {
  it('does something', async () => {
    const input = [];
    const output = await lib(input);
    expect(output).toBe(input);
  });
});
