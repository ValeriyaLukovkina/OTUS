// 2. 
// export function expect (actual) {
//     return {
//         toBe(expected) {
//             if (actual !== expected) {
//                 throw new Error(`${actual} is not equal to ${expected}`);
//             }
//         }
//     }
// }

// 3. 
// export function test (title, callback) {
//     try {
//         callback();
//         console.log(`OK: ${title}`)
//     } catch (err) {
//         console.error(`Error: ${title}`);
//         console.error(err);
//     }
// }

// export function expect (actual) {
//     return {
//         toBe(expected) {
//             if (actual !== expected) {
//                 throw new Error(`${actual} is not equal to ${expected}`);
//             }
//         }
//     }
// }


// 4. чтобы добавить в глобальную область видимости, вместо экспорта:
// function test (title, callback) {
//     try {
//         callback();
//         console.log(`OK: ${title}`)
//     } catch (err) {
//         console.error(`Error: ${title}`);
//         console.error(err);
//     }
// }

// function expect (actual) {
//     return {
//         toBe(expected) {
//             if (actual !== expected) {
//                 throw new Error(`${actual} is not equal to ${expected}`);
//             }
//         }
//     }
// }
// global.test = test;
// global.expect = expect;

