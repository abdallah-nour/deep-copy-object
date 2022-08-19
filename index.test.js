const copyObject = require('./index');

describe('Copying Nested Objects', () => {
  const user = {
    age: 22,
    address: {
      street: 'some street',
      buildingNO: '321',
    },
  };
  test('shallow copy should fail', () => {
    expect(user.address).toBe({ ...user }.address);
  });
  test('deep copy should success', () => {
    expect(user.address).not.toBe(copyObject({ ...user }).address);
  });
});
