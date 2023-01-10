let breaking_img = document.querySelector('#breaking_img')
let breaking_newsTitle = document.querySelector('#breaking_news .title')
let breaking_newsDescription = document.querySelector('#breaking_news .description')
let top_news = document.querySelector('.top_news')

//fetching news data from a website providing api

const apiKey = "75e850612efb4af4b4bc731cf653e853"

const fetchData = async (category, pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=za&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
}

fetchData('general', 5)
     
//adding breaking news

const add_breakingNews = (data) =>{
    breaking_img.innerHTML =  `<img src=${data[2].urlToImage} alt="image">`
    breaking_newsTitle.innerHTML = `<a href="${data[2].url} target="_blank"><h3>${data[2].title}</h3></a>`
    breaking_newsDescription.innerHTML = `<h3>${data[2].description}</h3>`
}

fetchData('general', 5).then(add_breakingNews)

//adding top headlines

const add_topNews = (data) =>{
    let html = ''
    data.forEach(element => {
        
    });((element) => {
        if (element.title.length<100){
            title = element.title
        }

        else{
            title = element.title.slice(0,100) = ". . ."
        }

        html += ` <div class="news">
                     <div class="img">
                     <img src=${element.urlToImage} alt="image">
                     </div>
                     <div class="text">
                        <div class="title" >
                        <a href=${element.url} target="_blank"><p>${title}</p></a>
                        </div>
                    </div>
                  </div>`
    });

    top_news.innerHTML = html
}

fetchData('general', 20).then(add_topNews)

