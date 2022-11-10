import fc from "fast-check";
import { test } from 'vitest';
import { sum } from "./sum";

test('a+b=b+a', () => {
    fc.assert(
        fc.property(fc.integer(), fc.integer(), (a, b) => sum(a, b) === sum(b, a) )
    );
})