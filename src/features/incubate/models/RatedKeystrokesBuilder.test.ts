import {RatedKeystrokesBuilder} from "./RatedKeystrokesBuilder";
import * as assert from "assert";
import {RatedKeystroke} from "../models";

describe("Here are my tests", () => {
    it("should not fail", () => {
        const subject = new RatedKeystrokesBuilder();
        subject.add("abc", 10);
        const exp: RatedKeystroke[] = [
            {
                char: "a",
                ctl: false,
                alt: false,
                rating: 10,
            },
            {
                char: "b",
                ctl: false,
                alt: false,
                rating: 10,
            },
            {
                char: "c",
                ctl: false,
                alt: false,
                rating: 10,
            },
        ];
        assert.deepStrictEqual(subject.getArr(), exp);
    });
});