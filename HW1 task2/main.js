function maxItemAssociation(arr) {
    let newArr = [];
    let newArr2 = [];
    function a (arrNew, arrOld) {
        let res = arrNew.some(elem => arrOld.includes(elem))
        return res;
    }
    function addNewArr (arr, subArr){
        for (let i = 0; i < subArr.length; i++){
            arr.push(subArr[i]);
        }
    }
    function deleteRepeatElem (arr) {
        arr = arr.sort()
        return arr.filter(function (elem, index) {
            return arr.indexOf(elem, index+1) == -1;
        });
    }
    for (let subArr of arr) {
        if (newArr.length != 0) {
            if (a(newArr, subArr)) {
                newArr.push(...subArr)
            } else {
                addNewArr(newArr2, subArr)
            }
        } else {
            addNewArr(newArr, subArr)
        }

    }
    newArr = deleteRepeatElem(newArr);
    newArr2 = deleteRepeatElem(newArr2);
    if (newArr.length > newArr2.length) {
        return newArr;
    } else {
        return newArr2;
    }
}
console.log( maxItemAssociation( [["a", "b"], ["a", "c"], ["d", "e"]]));
console.log( maxItemAssociation( [
    ["q", "w", 'a'],
    ["a", "b"],
    ["a", "c"],
    ["q", "e"],
    ["q", "r"],
    ]));