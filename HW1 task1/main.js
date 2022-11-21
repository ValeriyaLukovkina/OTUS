function sum(elem) {
    if (elem === undefined || elem === null) {
        return res;
    }
    res = 0;
    function add (elem) {
        if (elem) {
            res += elem;
            return add;
        } else {
            return res;
        }
    }
	return add(elem);
}
let res=0;
console.log(sum());
console.log(sum(1)(2)(4)(2)(4)(2)(4)());
console.log(sum());
console.log(sum(1)(4)(5)(7)(4)(2)(4)());
console.log(sum());