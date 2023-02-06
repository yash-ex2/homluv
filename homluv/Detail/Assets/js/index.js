function getParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
}


window.onload= ()=> {
    path = getParams().get('path');
    path =path.split(' ').join('-')
    fetchAllArticles();
}


function insertArticles(article){
    articles__container = document.querySelector('.articles__container');
    let htmlitem=document.createElement("div");
    let heading = document.createElement('h2');
    heading.style.margin ="20px 0px";
    heading.innerHTML = article.title;
    articles__container.appendChild(heading);
    htmlitem.innerHTML = article.html;
    htmlitem.style.margin="0 0 20px 0";
    articles__container.appendChild(htmlitem)
    article.images.forEach(item => {
        let image_item=document.createElement("div");
        let sub_title=document.createElement('h3');
        sub_title.innerHTML=item.subTitle;
        let sub_image=document.createElement('div');
        //console.log(item.image);
        sub_image.innerHTML=item.image;
        let overlay_title=document.createElement('h4');
        overlay_title.innerHTML=item.overlayTitle;
        let overlay_area=document.createElement('div');
        overlay_title.innerHTML=item.overlayAreaOne;
        image_item.appendChild(sub_title);
        image_item.appendChild(sub_image);
        image_item.appendChild(overlay_title);
        image_item.appendChild(overlay_area);
        image_item.style.margin = "15px";
        articles__container.appendChild(image_item);   
    });

    //Data binding
    
}

async function search() {
    if (event.key === "Enter") {
        let page = 1;
        const results = 16;
        let search = document.getElementById('searchTxt').value.toString();
        document.querySelector('.categoryWiseBanner').style.display = "none";
        const data = await fetch(`http://127.0.0.1:8000/search/?page=${page}&pagesize=${results}&search=${search}`);
        const articles = await data.json();
        let article_container = document.getElementsByClassName("articles__container")[0];
        article_container.innerHTML = "";
        for (let article of articles) {
            insertArticles(article);
        }
    }
}


async function fetchAllArticles() {
    const data = await fetch(`http://127.0.0.1:8000/articles/?path=${path}&detail=true`);
    const articles = await data.json(); 
    for (let article of articles) {
        insertArticles(article);
    }
};