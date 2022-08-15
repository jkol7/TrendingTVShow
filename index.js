const trendingShowsURL = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0'

const showURL = 'https://api.themoviedb.org/3/tv/'

let headingCollection = document.querySelectorAll('h4')
let imageCollection = document.querySelectorAll('img.poster')
let imageNetworkCollection = document.querySelectorAll('img.networkIMG')
let linkCollection = document.querySelectorAll('a.showLink')

let trendingShowNames, trendingShowImages, trendingShowIDs
let trendingShowLinks = [], trendingShowNetworks = []


getTrendingShows()
getIndividualShows()


async function getTrendingShows(){

  const response = await fetch(trendingShowsURL)
  const data = await response.json()


  trendingShowNames = data.results.map(el => el.name)
  trendingShowImages = data.results.map(el => el.poster_path)
  trendingShowIDs = data.results.map(el => el.id)

  

  for (let i = 0; i < 12; i++){
  imageCollection[i].src = 'https://image.tmdb.org/t/p/w500/' + trendingShowImages[i]
  headingCollection[i].innerHTML = trendingShowNames[i]
}
}
    

async function getIndividualShows(){
  const response = await fetch(trendingShowsURL)
  const data = await response.json()
  trendingShowIDs = await data.results.map(el => el.id)

    const response2 = await fetch(showURL + trendingShowIDs[0] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data2 = await response2.json()
    linkCollection[0].href = `${data2.homepage}`
    imageNetworkCollection[0].src = 'https://image.tmdb.org/t/p/w500' + `${data2.networks[0].logo_path}`

    const response3 = await fetch(showURL + trendingShowIDs[1] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data3 = await response3.json()
    linkCollection[1].href = `${data3.homepage}`
    imageNetworkCollection[1].src = 'https://image.tmdb.org/t/p/w500' + `${data3.networks[0].logo_path}`


    const response4 = await fetch(showURL + trendingShowIDs[2] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data4 = await response4.json()
    linkCollection[2].href = `${data4.homepage}`
    imageNetworkCollection[2].src = 'https://image.tmdb.org/t/p/w500' + `${data4.networks[0].logo_path}`


    const response5 = await fetch(showURL + trendingShowIDs[3] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data5 = await response5.json()
    linkCollection[3].href = `${data5.homepage}`
    imageNetworkCollection[3].src = 'https://image.tmdb.org/t/p/w500' + `${data5.networks[0].logo_path}`


    const response6 = await fetch(showURL + trendingShowIDs[4] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data6 = await response6.json()
    linkCollection[4].href = `${data6.homepage}`
    imageNetworkCollection[4].src = 'https://image.tmdb.org/t/p/w500' + `${data6.networks[0].logo_path}`


    const response7 = await fetch(showURL + trendingShowIDs[5] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data7 = await response7.json()
    linkCollection[5].href = `${data7.homepage}`
    imageNetworkCollection[5].src = 'https://image.tmdb.org/t/p/w500' + `${data7.networks[0].logo_path}`

    const response8 = await fetch(showURL + trendingShowIDs[6] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data8 = await response8.json()
    linkCollection[6].href = `${data8.homepage}`
    imageNetworkCollection[6].src = 'https://image.tmdb.org/t/p/w500' + `${data8.networks[0].logo_path}`


    const response9 = await fetch(showURL + trendingShowIDs[7] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data9 = await response9.json()
    linkCollection[7].href = `${data9.homepage}`
    imageNetworkCollection[7].src = 'https://image.tmdb.org/t/p/w500' + `${data9.networks[0].logo_path}`


    const response10 = await fetch(showURL + trendingShowIDs[8] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data10 = await response10.json()
    linkCollection[8].href = `${data10.homepage}`
    imageNetworkCollection[8].src = 'https://image.tmdb.org/t/p/w500' + `${data10.networks[0].logo_path}`


    const response11 = await fetch(showURL + trendingShowIDs[9] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data11 = await response11.json()
    linkCollection[9].href = `${data11.homepage}`
    imageNetworkCollection[9].src = 'https://image.tmdb.org/t/p/w500' + `${data11.networks[0].logo_path}`


    
    const response12 = await fetch(showURL + trendingShowIDs[10] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data12 = await response12.json()
    linkCollection[10].href = `${data12.homepage}`
    imageNetworkCollection[10].src = 'https://image.tmdb.org/t/p/w500' + `${data12.networks[0].logo_path}`


    const response13 = await fetch(showURL + trendingShowIDs[11] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    const data13 = await response13.json()
    linkCollection[11].href = `${data13.homepage}`
    imageNetworkCollection[11].src = 'https://image.tmdb.org/t/p/w500' + `${data13.networks[0].logo_path}`

    }
