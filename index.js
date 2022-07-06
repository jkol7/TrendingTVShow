const url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0'

const showURL = 'https://api.themoviedb.org/3/tv/'

let headingCollection = document.querySelectorAll('h4')
let imageCollection = document.querySelectorAll('img.poster')
let imageNetworkCollection = document.querySelectorAll('img.networkIMG')
let linkCollection = document.querySelectorAll('a.showLink')

console.log(linkCollection)
let networkArr = []
let networkArrImg = []
let linkArr = []

let firstData;



fetch(url)
    .then(res => res.json()) 
      .then(data => {
        console.log(data)
          firstData = data
          return fetch(showURL + data.results[0].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

        })



      /* Fetches to call new API URL
      This is a separate call than original url
      Requires the show ID pulled from url to call */
      
      
    .then(res => res.json()) 
      .then(data => {

        console.log(data)
        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[1].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })

      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[2].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })

      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[3].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })

      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[4].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })


      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[5].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })


      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[6].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })



      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[7].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })

      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)

        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[8].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })

      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)

        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[9].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })


      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[10].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })


      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[11].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })

      .then(res => res.json()) 
      .then(data => {

        linkArr.push(data.homepage)
        networkArrImg.push(data.networks[0].logo_path)
        return fetch(showURL + firstData.results[12].id + '?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0&language=en-US');

      })

   

      /* Begin adding to the DOM */


      .then(res => res.json()) 
      .then(data => {
        
   
        networkArrImg.forEach((obj,i) => {imageNetworkCollection[i].src = 'https://image.tmdb.org/t/p/w500' + networkArrImg[i]})
        linkArr.forEach((obj,i) => {linkCollection[i].href = linkArr[i]})


        firstData.results.forEach((obj, i) => {

          headingCollection[i].innerText = [i + 1] + '. ' + obj.name
          imageCollection[i].src = 'https://image.tmdb.org/t/p/w500/' + obj.poster_path
        })

  
      })
      
      



      .catch(err => {
          console.log(`error ${err}`)
      });


