const url = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9a9ba9f5d574cc3cf69f3615a1f424e0'

const showUrl = 'https://api.themoviedb.org/3/tv/'

let headingCollection = document.querySelectorAll('h4')
let imageCollection = document.querySelectorAll('img')
let idArr = []

fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
  

       
        let idArr = []

        //Adds TV image, title to the DOM
        data.results.forEach((obj, i) => {
          
          headingCollection[i].innerText = obj.name
          imageCollection[i].src = 'https://image.tmdb.org/t/p/w500/' + obj.poster_path
          idArr.push(obj.id)
          console.log(idArr)
          
        }
      )
    
    }   
      )
      .catch(err => {
          console.log(`error ${err}`)
      }

      
      );

     



/*
        
        fetch(showUrl + idArr[0] + 'api_key=9a9ba9f5d574cc3cf69f3615a1f424e0')
        .then(res => res.json()) // parse response as JSON
        .then(data => {
  
          console.log(data.homepage)
        } 
      
      )
      }   */