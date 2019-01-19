import {Keystroke, RatedKeystroke} from "../models";

export class RatedKeystrokesBuilder {
    arr: RatedKeystroke[] = [];
    unique: Set<Keystroke> = new Set();

    public add(chars: string, rating: number) {
        for (const char of chars) {
            const rks: RatedKeystroke = {
                char,
                ctl: false,
                alt: false,
                rating
            };
            this.arr.push(rks);
        }
    }

    public getArr() {
        return this.arr;
    }
}