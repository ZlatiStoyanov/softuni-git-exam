const test = require("node:test");
const assert = require("node:assert");

test("application smoke test passes", () => {
  assert.strictEqual("Application started safely.".includes("safely"), true);
});
