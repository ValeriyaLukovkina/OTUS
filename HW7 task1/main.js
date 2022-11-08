
let mainTree = document.querySelector('#main_tree');
let styleTree = document.createElement('style');
let body = document.querySelector('body')

mainTree.attachShadow({mode: 'open'});

class MyTree extends HTMLElement {
    constructor () {
        super();
    }
}
class MyLeaf extends HTMLElement {
    constructor () {
        super();
    }
}
customElements.define('my-tree', MyTree);
customElements.define('my-leaf', MyLeaf);

function createTree (tree, parent) {

        let list = document.createElement('my-tree');
        let item = document.createElement('my-leaf');
        item.textContent = tree.id;
        list.append(item)
        parent.append(list)
        if (tree.items) {
            for (let i = 0; i < tree.items.length; i++) {
                createTree(tree.items[i], list);
            }
        }
}
function addTree (elem) {
    let jsonTree = mainTree.getAttribute('data-tree');
    let objTree = JSON.parse(jsonTree);
    let wrp = document.createElement('div');
    createTree(objTree, wrp);
    console.log(wrp)
    elem.shadowRoot.append(wrp);

}

styleTree.textContent = `my-tree {
    display: list-item;
    margin-left: 20px;
  }

`;
mainTree.shadowRoot.append(styleTree);
addTree (mainTree);