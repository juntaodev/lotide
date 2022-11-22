// test/eqObjectsTest.js

const assert = require('chai').assert;

const eqObjects = require('../eqObjects');

// TEST CODE
// TEST PRIMITIVES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false


// TEST ARRAYS
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false



describe("#eqObjects", () => {
  it("returns true for (ab, ba)", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it("returns false for (ab, abc)", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it("returns true for (cd, dc)", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it("returns false for (cd, cd2)", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});