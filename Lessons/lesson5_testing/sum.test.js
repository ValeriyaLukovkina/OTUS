// 1. Так никто не пишет
// import { sum } from './sum.js';
// const actual = sum(1, 2);
// const expected = 3;
// if (actual !== expected) {
//     throw new Error(`${actual} is not equal to ${expected}`);
// }

//  2. создали файл с тестом и сдесь кратко пишем значения тестов
// Но когда все хорошо ничего не видно
// import { sum } from './sum.js';
// import { expect } from './test-utils.js';

// expect(sum(1, 2)).toBe(3);
// expect(sum(2, 2)).toBe(4);
// expect(sum(3, 2)).toBe(5);

// 3. Обработаем, что когда тест проходит успешно, было видно
// import { sum } from './sum.js';
// import { expect, test } from './test-utils.js';

// test ('1+2=3', () => {
//     expect(sum(1,2)).toBe(3);
// });
// test ('2+2=4', () => {
//     expect(sum(2,2)).toBe(4);
// });


// 4. Чтобы добавить в глобальную область видимости, вместо экспорта:
// Чтобы вызвать необходимо в консоле прописать: node -r  'файл,где объявлены глобал' 'этот файл'
// выдает ошибку почему-то

// test ('1+2=3', () => {
//     expect(sum(1,2)).toBe(3);
// });


// 5. vitest
import {sum} from "./sum";
import {test, expect} from "vitest"
test ('1+2=3', () => {
    expect(sum(1,2)).toBe(3);
});
test ('2+2=4', () => {
    expect(sum(2,2)).toBe(4);
});