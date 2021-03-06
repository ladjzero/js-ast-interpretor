const { run } = require('../src/common/runner')

it('var declare, binary expression, console.log', () => {
  const global = { console: { log: jest.fn() }}

  run(`
    var a = 1;
    var b = a + 1;
    console.log(b);
  `, global)

  expect(global.console.log).toHaveBeenCalledTimes(1)
  expect(global.console.log).toBeCalledWith(2)
})