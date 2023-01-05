let list = document.querySelector('.list');

let paramsString = document.location.search;
let searchParams = new URLSearchParams(paramsString);
let id = searchParams.get("id")

fetch(`http://localhost:3001/news/${id}`).then(async (response) => {
    if (response.ok) {
        let json = await response.json();
        debugger
        if (json.news) {
            debugger
            json.news.map(el => getNews(el ))
        }

    }
});

const getNews = async(el) => {
    // list.map(el => {
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.innerHTML = el.title
        link.href = el.link
        link.target = '_blank'
        item.appendChild(link)
        return list.appendChild(item)
    // })
}
    // console.log(searchParams.get("id")); 
