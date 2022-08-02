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
    


  fetch(showURL + trendingShowIDs[0] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
  .then(res => res.json())
  .then(data => 
    {
      linkCollection[0].href = `${data.homepage}`
      imageNetworkCollection[0].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
    })


    fetch(showURL + trendingShowIDs[1] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
    .then(res => res.json())
    .then(data => 
      {

        linkCollection[1].href = `${data.homepage}`
        imageNetworkCollection[1].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
      })


      fetch(showURL + trendingShowIDs[2] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
      .then(res => res.json())
      .then(data => 
        {
          linkCollection[2].href = `${data.homepage}`
          imageNetworkCollection[2].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`

        })


        fetch(showURL + trendingShowIDs[3] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
        .then(res => res.json())
        .then(data => 
          {
            linkCollection[3].href = `${data.homepage}`
            imageNetworkCollection[3].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
          })


          fetch(showURL + trendingShowIDs[4] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
          .then(res => res.json())
          .then(data => 
            {
              linkCollection[4].href = `${data.homepage}`
              imageNetworkCollection[4].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
            })


            fetch(showURL + trendingShowIDs[5] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
            .then(res => res.json())
            .then(data => 
              {
                linkCollection[5].href = `${data.homepage}`
                imageNetworkCollection[5].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
              }) 

            fetch(showURL + trendingShowIDs[6] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
            .then(res => res.json())
            .then(data => 
              {
              linkCollection[6].href = `${data.homepage}`
              imageNetworkCollection[6].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
              })  

              fetch(showURL + trendingShowIDs[7] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
              .then(res => res.json())
              .then(data => 
                {
                linkCollection[7].href = `${data.homepage}`
                imageNetworkCollection[7].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
                })  
                
            fetch(showURL + trendingShowIDs[8] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
            .then(res => res.json())
            .then(data => 
              {
              linkCollection[8].href = `${data.homepage}`
              imageNetworkCollection[8].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
              })  
              
              fetch(showURL + trendingShowIDs[9] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
              .then(res => res.json())
              .then(data => 
                {
                linkCollection[9].href = `${data.homepage}`
                imageNetworkCollection[9].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
                }) 

                fetch(showURL + trendingShowIDs[10] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
                .then(res => res.json())
                .then(data => 
                  {
                  linkCollection[10].href = `${data.homepage}`
                  imageNetworkCollection[10].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
                  }) 


                  fetch(showURL + trendingShowIDs[11] + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US')
                  .then(res => res.json())
                  .then(data => 
                    {
                    linkCollection[11].href = `${data.homepage}`
                    imageNetworkCollection[11].src = 'https://image.tmdb.org/t/p/w500' + `${data.networks[0].logo_path}`
                    })     
    })
