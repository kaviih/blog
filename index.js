let breaking_img = document.querySelector('#breaking_img')

//fetching news data from a website providing api

const apiKey = "75e850612efb4af4b4bc731cf653e853"

const fetchData = async (category, pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=za&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
}

//fetchData('general', 5)
     
//adding breaking news

const add_breakingNews = (date) =>{
    breaking_img.innerHTML =  `<img src="" alt="">`
    //not done with this: dynamically adding braking news
}