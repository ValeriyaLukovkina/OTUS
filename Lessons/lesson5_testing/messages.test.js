import { expect, test, vi} from "vitest";

const messages = {
    items: ['1', '2', '3', '4'],
    getLatest: () => messages.items[messages.items.length - 1],
}

test('getLatest', () => {
    const spy = vi.spyOn(messages, 'getLatest')
    expect(messages.getLatest()).toBe('4')
    expect(spy).toBeCalledTimes(1);
    expect(spy).toHaveBeenCalledWith()
});

// test('getLatest', () => {
//     const spy = vi.spyOn(messages, 'getLatest')
//     expect(spy).toBeCalledTimes(1);
//     expect(spy).toHaveBeenCalledWith()
// })