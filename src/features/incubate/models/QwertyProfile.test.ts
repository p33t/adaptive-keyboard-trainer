import {QwertyProfile} from "./QwertyProfile";

describe("QwertyProfile tests", () => {
  test("has 95 elems", () => {
    expect(new QwertyProfile().keys.length).toBe(95);
  });
});