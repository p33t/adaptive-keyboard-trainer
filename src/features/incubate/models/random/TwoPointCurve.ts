import {ICurve} from "./ICurve";

/**
 * A point on a 2D plane.
 */
export type Point = { x: number, y: number };

/**
 * Yields simple curve with linear interpolation.
 * p2 _______
 * __/
 * p1
 */
export function TwoPointCurve(p1: Point, p2: Point): ICurve {
    const ratio = p1.x === p2.x
        ? NaN
        : (p2.y - p1.y) / (p2.x - p1.x);
    return (x: number) => {
        if (x <= p1.x) return p1.y;
        if (x >= p2.x) return p2.y;
        return (x - p1.x) * ratio + p1.y;
    };
}