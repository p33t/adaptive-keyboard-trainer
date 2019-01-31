import {Keystroke, RatedKeystroke} from "../models";

export class RatedKeystrokesBuilder {
    arr: RatedKeystroke[] = [];
    unique: Set<Keystroke> = new Set();

    public add(chars: string, rating: number) {
        for (const char of chars) {
            const found = this.arr.find(elem => elem.char === char);
            if (found) throw Error(`Repeated keystroke '${char}'`);

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