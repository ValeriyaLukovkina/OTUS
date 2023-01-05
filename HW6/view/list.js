const wrpList = document.querySelector('.list');

fetch('http://localhost:3001/rss').then(async (response) => {
    if (response.ok) {
        let json = await response.json();
        if (json.rss) {
            let list = json.rss.map(el => ({titleRSS: el.titleRSS, idRSS: el._id }))
            getItem(list )
        }

    }
});
const getItem = async(list ) => {
    list.map(el => {
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.innerHTML = el.titleRSS
        link.href = `current.html?id=${el.idRSS}`
        item.appendChild(link)
        return wrpList.appendChild(item)
    })
}