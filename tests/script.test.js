const test = require("node:test");
const assert = require("node:assert");
const { additionner } = require("../public/script.js");

test("2 + 3 = 5", () => {
  assert.strictEqual(additionner(2, 3), 5);
});

test("-1 + 1 = 0", () => {
  assert.strictEqual(additionner(-1, 1), 0);
});
