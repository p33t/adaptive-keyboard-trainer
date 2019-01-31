/**
 * Returns an index into the given weights based on the random number given.
 * The higher the weighting, the more likely it well be chosen.
 *
 * @param weights 0 or positive numbers indicating the likelihood of being chosen (relative to other weights)
 * @param random A random number where 0 <= random < 1
 * @returns An index into the given weights array
 */
export default function weightedRandom(weights: number[], random: number) {
    const maxIndex = weights.length - 1;

    if (random < 0) throw new Error('Random number must be >= 0');
    if (random >= 1) throw new Error('Random number must be < 1');
    if (maxIndex < 0) throw new Error('Weights cannot be empty');

    const accumed = accumWeights(weights);
    const scaled = random * accumed[maxIndex];
    for (let i = 0; i <= maxIndex; i++) {
        if (accumed[i] > scaled) return i;
    }
    return maxIndex; // all zero weights
}

export function accumWeights(weights: number[]): number[] {
    const length = weights.length;
    if (length === 0) throw new Error("Weights cannot be empty");
    const result = [weights[0]];
    for (let i = 1; i < length; i++) {
        const prev = result[i - 1];
        let weight = weights[i];
        if (weight < 0) throw new Error(`Found negative weight ${weight} at index ${i}`);
        result[i] = prev + weight;
    }
    return result;
}
