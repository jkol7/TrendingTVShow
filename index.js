const trendingShowsURL = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0'

const showURL = 'https://api.themoviedb.org/3/tv/'

let headingCollection = document.querySelectorAll('h4')
let imageCollection = document.querySelectorAll('img.poster')
let imageNetworkCollection = document.querySelectorAll('img.networkIMG')
let linkCollection = document.querySelectorAll('a.showLink')

let trendingShowNames, trendingShowImages, trendingShowIDs
let trendingShowLinks = [], trendingShowNetworks = []



fetch(trendingShowsURL)
  .then(res => res.json())
  .then(data => {
  trendingShowNames = data.results.map(el => el.name)
  trendingShowImages = data.results.map(el => el.poster_path)
  trendingShowIDs = data.results.map(el => el.id)

  

  for (let i = 0; i < 12; i++){
  imageCollection[i].src = 'https://image.tmdb.org/t/p/w500/' + trendingShowImages[i]
  headingCollection[i].innerHTML = trendingShowNames[i]
}

for (let i = 0; i < 12; i++){
  fetch(showURL + trendingShowIDs[i] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
  .then(res => res.json())
  .then(data => 
    {

      //Checks if there is a logo for the network in the data. If there isn't, it will result in a 404. Instead it will hide the logo.
      data.networks[0] ? trendingShowNetworks.push(data.networks[0].logo_path) : trendingShowNetworks.push("notfound")
      trendingShowNetworks[i].includes('notfound') ? imageNetworkCollection[i].classList.add('hide') : imageNetworkCollection[i].src = 'https://image.tmdb.org/t/p/w500' + `${trendingShowNetworks[i]}` 
      
      
      linkCollection[i].href = `${trendingShowLinks[i]}`
      
    }
    
    )
  
  }

  }).catch(

    console.log(error)
    
)