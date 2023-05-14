const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    expect(shuffle()).toEqual([])
  })

  test('return an array of the same length as the argument sent in', () => {
    expect(shuffle([1,2,3]).length).toEqual([1,2,3].length)
  })
});
