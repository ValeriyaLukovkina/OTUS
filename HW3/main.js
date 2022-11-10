export const getPath = (elem) => {
    let nameParent = [];
    let parent = '';

    const findNumElem = (el) => {
        for (let i = 0; i <= el.parentElement.children.length; i++) {
            if (elem === el.parentElement.children[i]) {
                nameParent.push(` :nth-child(${i + 1})`);
            }

        }
    }
    if (elem) {
        if (elem.className) {
            nameParent.push(`${elem.tagName.toLowerCase()}.${elem.className}`);
        } else {
            findNumElem(elem)
        }
        while (elem = elem.parentElement) {
            if (elem.tagName === 'HTML') {

            } else if (elem.tagName === 'BODY') {
                parent += elem.tagName.toLowerCase();
            } else {
                if (elem.className) {
                    parent += `${elem.tagName.toLowerCase()}.${elem.className}`;
                } else {
                    findNumElem(elem)
                }
            }
            nameParent.push(parent);
            parent = '';
        }

        let str = nameParent.reverse().join(' ');
        return str;
    } else {
        console.log('error')
    }
}

document.querySelector('body').addEventListener('click', (e) => {
    let str = getPath(e.target)
    console.log(str)
    console.log(document.querySelector(str))
})