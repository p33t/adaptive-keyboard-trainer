import * as assert from "assert";
import {TwoPointCurve} from "./TwoPointCurve";

describe("TwoPointCurve tests", () => {
    describe("Given an upward TwoPointCurve", () => {
        const subject = TwoPointCurve({x: .1, y: .1}, {x: .3, y: .3});

        function check(x: number, expY: number) {
            assert.strictEqual(subject(x), expY);
        }

        describe("when I evaluate x", () => {
            it("should return an appropriate y", () => {
                check(0, .1);
                check(.1, .1);
                check(.3, .3);
                check(.4, .3);
                check(.2, .2);
                check(.15, .15);
                check(.25, .25);
            });
        });
    });
    describe("Given an downward TwoPointCurve", () => {
        const subject = TwoPointCurve({x: .1, y: .3}, {x: .3, y: .1});

        function check(x: number, expY: number) {
            assert.strictEqual(subject(x), expY);
        }

        describe("when I evaluate x", () => {
            it("should return an appropriate y", () => {
                check(0, .3);
                check(.1, .3);
                check(.3, .1);
                check(.4, .1);
                check(.2, 0.19999999999999998);
                check(.15, .25);
                check(.25, .15);
            });
        });
    });

    describe("Given a step down TwoPointCurve", () => {
        const subject = TwoPointCurve({x: .1, y: .3}, {x: .1, y: .1});

        function check(x: number, expY: number) {
            assert.strictEqual(subject(x), expY);
        }

        describe("when I evaluate x", () => {
            it("should return an appropriate y", () => {
                check(0, .3);
                check(.1, .3);
                check(.100000000001, .1);
                check(.4, .1);
            });
        });
    });
});
