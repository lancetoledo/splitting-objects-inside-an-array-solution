const expect = chai.expect,
  testarr = [
    { name: 'currants', quantity: 1 },
    { name: 'grapes', quantity: 2 },
    { name: 'bananas', quantity: 2 }
  ];
describe('Splitting Objects Inside An Array', () => {
  it('Split objects inside an array', () => {
    expect(splitBunches(testarr)).to.eql(
      [
        { name: 'currants', quantity: 1 },
        { name: 'grapes', quantity: 1 },
        { name: 'grapes', quantity: 1 },
        { name: 'bananas', quantity: 1 },
        { name: 'bananas', quantity: 1 }
      ],
      'Please check your function!'
    );
  });
});
