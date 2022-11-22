export const getPath = (elem) => {
    let nameParent = [];
    let parent = '';

    const findNumElem = (el) => {
        for (let i = 0; i <= el.parentElement.children.length; i++) {
            if (elem === el.parentElement.children[i]) {
                return `:nth-child(${i + 1})`
            }

        }
    }
    const classEl = (el) => {
        if (el.includes(' ', 0)) {
            return el.split(' ')[0]
        } else {
            return el;
        }
    }

    if (elem) {
        if (elem.className) {
            nameParent.push(`${elem.tagName.toLowerCase()}.${classEl(elem.className)}${findNumElem(elem)}`);
        } else {
            nameParent.push(` ${findNumElem(elem)}`);
        }
        while (elem = elem.parentElement) {
            if (elem.tagName === 'HTML') {

            } else if (elem.tagName === 'BODY') {
                parent += elem.tagName.toLowerCase();
            } else {
                if (elem.className) {
                    parent += `${elem.tagName.toLowerCase()}.${classEl(elem.className)}${findNumElem(elem)}`;
                } else {
                    nameParent.push(` ${findNumElem(elem)}`);
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