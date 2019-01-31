import * as assert from 'assert';
import weightedRandom, {accumWeights} from "./WeightedRandom";

describe("WeightedRandom tests", () => {
    describe("accumWeights() test", () => {
        it("should work", () => {
            assert.deepStrictEqual(accumWeights([1]), [1]);
            assert.deepStrictEqual(accumWeights([1, 3, 2]), [1, 4, 6]);
            assert.deepStrictEqual(accumWeights([0, 1, 3, 2, 0]), [0, 1, 4, 6, 6]);
        });
        it("should error if negative weight", () => {
            assert.throws(() => accumWeights([0, 1, -1]), /Found negative weight -1 at index 2/)
        });
        it("should error if no given weights", () => {
            assert.throws(() => accumWeights([]), /Weights cannot be empty/);
        });
    });
    describe("weightedRandom() test", () => {
        function check(expected: number, ...weights: number[]) {
            assert.strictEqual(weightedRandom(weights, .5), expected);
        }

        it("should work", () => {
            check(0, 0);
            check(1, 0, 1);
            check(0, 1, 0);
            check(1, 1, 1, 1);
            check(2, 1, 1, 3);
            check(0, 3, 1, 1);
            check(1, 1, 1)
            check(1, 2, 1, 1)
        });

        it ("should error if illegal random", () => {
            assert.throws(() => weightedRandom([0], -0.000000001), /Random number must be >= 0/);
            assert.throws(() => weightedRandom([0], 1), /Random number must be < 1/);
        });
    });
});