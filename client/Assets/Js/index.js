let page = 0;
const results = 15;
let category = "articles";
let loadMorebtn = document.querySelector('#loadMore');
let prevClicked="";


window.onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    category = urlParams.get('category');
    let anchorLi = document.querySelector(`#${category}`);
    anchorLi.firstChild.className="active";
    let bannerId = category + "Banner";
    banners.forEach(banner => {
        if (banner.id == bannerId) {
            banner.style.display = "";
        } else banner.style.display = "none";
    })
    fetchAllArticles(category);
}

loadMorebtn.onclick = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    category = urlParams.get('category');
    fetchAllArticles(category);
}


let article_container = document.getElementsByClassName("articles__container")[0];

async function fetchAllArticles(category) {
    page += 1;
    const data = await fetch(`http://127.0.0.1:8000/?page=${page}&pagesize=${results}&category=${category}`);
    const articles = await data.json();
    if (articles.length < 16) {
        loadMorebtn.style.display = "none";
    } else {
        loadMorebtn.style.display = "";
    }   

    for (let article of articles) {
        let category_item = document.createElement('article');
        category_item.className = "category_item";

        let figure = document.createElement('figure');
        figure.className = "category_item__figure";

        let Imganchor = document.createElement('a');
        Imganchor.className = "category_item_img_link";

        let img = document.createElement('img');

        let figureCap = document.createElement('figCaption');
        figureCap.className = "category_item__figure__caption";

        let h3 = document.createElement('h3');
        let anchor = document.createElement('a');
        let para = document.createElement('p');
        let span = document.createElement('span');

        category_item.appendChild(figure);
        figure.appendChild(Imganchor);
        Imganchor.appendChild(img);
        figure.appendChild(figureCap);
        figureCap.appendChild(anchor);
        anchor.appendChild(h3);
        figureCap.appendChild(para);
        figureCap.appendChild(span);

        //Data binding
        img.src = article.image;
        h3.innerText = article.title;
        anchor.href = "/detail/?path=" + article.urlTitle;
        para.innerText = article.metaDescription;
        span.innerText = article.author;
        article_container.appendChild(category_item);

    }
};


async function search() {
    if (event.key === "Enter") {
        let page = 1;
        const results = 16;
        let search = document.getElementById('searchTxt').value.toString();
        document.querySelector('.categoryWiseBanner').style.display="none";
        const data = await fetch(`http://127.0.0.1:8000/?page=${page}&pagesize=${results}&search=${search}`);
        const articles = await data.json();
        let article_container = document.getElementsByClassName("articles__container")[0];
        article_container.innerHTML = "";
        for (let article of articles) {
            let category_item = document.createElement('article');
            category_item.className = "category_item";

            let figure = document.createElement('figure');
            figure.className = "category_item__figure";

            let Imganchor = document.createElement('a');
            Imganchor.className = "category_item_img_link";

            let img = document.createElement('img');

            let figureCap = document.createElement('figCaption');
            figureCap.className = "category_item__figure__caption";

            let h3 = document.createElement('h3');
            let anchor = document.createElement('a');
            let para = document.createElement('p');
            let span = document.createElement('span');

            category_item.appendChild(figure);
            figure.appendChild(Imganchor);
            Imganchor.appendChild(img);
            figure.appendChild(figureCap);
            figureCap.appendChild(h3);
            h3.appendChild(anchor);
            figureCap.appendChild(para);
            figureCap.appendChild(span);

            //Data binding
            img.src = article.image;
            h3.innerText = article.title;
            para.innerText = article.metaDescription;
            span.innerText = article.author;
            article_container.appendChild(category_item);

        }
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}






let sidemenu = document.getElementsByClassName("sidemenu")[0];
let links = sidemenu.querySelectorAll("li");
let banners = document.querySelectorAll('.categoryWiseBanner')[0].querySelectorAll('div');



links.forEach(link => {
    link.addEventListener("click", (e) => {
        article_container.innerHTML = "";
        page=0;
        category = link.id;
        fetchAllArticles(category);

    })
});