// I created the access key from my account (unplash.com)
const accessKey = "pxoEIhNdSwTzCF3ObMEsupGjVZeKPr3oDYvR8OMq2Ws"

const formEl = document.querySelector("form");
const inputEl =document.getElementById('search-input');
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById('show-more-button');

let inputData = "";
let page = 1;

 async function searchImages () {
    inputData = inputEl.value;
    const url =`https://api.unplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = ""
    }

    // part of image mapping 
    results.map((results) => {
        const imageWrapper =document.createElement('div')
        imageWrapper.classList.add('search-result')
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        // imagewrapper append 
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
    });

    // if photos are more and you see more photos, then show me button is appears "show more" and see more photos each time
    page++
    if(page > 1) {
        showMore.style.display = 'block'
    }
}

// call the function for images 
formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
});

showMore.addEventListener('click', () => {
    searchImages() 
});