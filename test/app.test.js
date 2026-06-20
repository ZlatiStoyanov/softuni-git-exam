const test = require("node:test");
const assert = require("node:assert");

test("application smoke test fails intentionally", () => {
  assert.strictEqual(false, true);
});
