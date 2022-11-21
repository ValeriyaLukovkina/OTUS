var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}
var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})

async function promiseReduce(asyncFunctions, reduce, initialValue = 0) {
    let result = initialValue;
    for (i = 0; i < asyncFunctions.length; i++) {
        try {
            result = reduce (result, await asyncFunctions[i]())
        } catch (err) {
            throw err;
        }
    }
    return Promise.resolve(result);
}
promiseReduce(
    [fn1, fn2],
    function (memo, value) {
    console.log('reduce')
    return memo * value
    },
    1
    )
    .then(console.log)