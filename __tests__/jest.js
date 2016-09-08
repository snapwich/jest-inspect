
describe("jest", () => {
  it("should allow me to break", () => {

    var test = true;

    // break won't be triggered
    debugger;

    expect(test).toBe(true);

  })
});