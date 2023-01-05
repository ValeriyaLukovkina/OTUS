const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const span = document.querySelector('.span');


const postRSS = (link) => {
    fetch('http://localhost:3001/rss', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link: link }),
    }).then(async (response) => {
        debugger
        if (response.ok) {
            let json = await response.json();
            if (json.resultCode === 0) {
                span.innerHTML = 'Success'
            } else if (json.resultCode === 1) {
                span.innerHTML = 'RSS already has'
            } else if (json.resultCode === 10) {
                span.innerHTML = 'Some error'
            }

        }
    });
}

btn.addEventListener('click', () => {
    event.preventDefault();
    let val = input.value;
    postRSS(val)
    console.log(val)
})

