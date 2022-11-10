import {test, expect, vi} from 'vitest';
import {purchase} from './purchase';



test('allows purchase if open', () => {
    const date =  new Date(2022, 7, 1, 10, 0, 0);
    // Date = function() {
    //     return date;
    // }//вместо этого написать строчку ниже, так как тесты идет паралельно, то время читатется в двух тестах одинаковое и надо сбрасывать значение
    vi.setSystemTime(date); //возращает к изначательному значению
    expect(purchase()).toEqual({message: "Success"});
});

test('disallows purchase if closed', () => {
    const date =  new Date(2022, 7, 1, 21, 0, 0);
    vi.setSystemTime(date); //возращает к изначательному значению
    // Date = function() {
    //     return date;
    // }
    expect(purchase()).toEqual({message: "Closed"});
});
