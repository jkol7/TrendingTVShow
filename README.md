# TrendingTVShow

See today's top trending TV shows. This site shows the top 12 trending TV shows across multiple streaming sites using the TMDB API.

https://trendingstreamingshows.herokuapp.com/

![image](https://user-images.githubusercontent.com/104634518/181853753-ba2e1701-3acb-48fb-8237-a62a05c54f85.png)


<b>How It's Made:</b>

<b>Tech used:</b> HTML, CSS, JavaScript, Node, Express

The app connects to the TMDB API by first connecting to the URL for today's top trending shows. Once we have today's trending shows, it then connects to other URLs on the database to provide more information on the individual shows. This mainly done through mapping and iterating over the data to display in the HTML. The site is built to be responsive with Flexbox. I set up the server side with Node and Express to deploy this to Heroku so that it is accessible to all. 

<b>Optimizations:</b>

The first version of this had tons of ".then" statements and resulted in a very long document of code. This was because of the trickiness of first needing the data from the first URL before calling the others. Without getting the 12 ids from the first URL I was unable to get more detailed data for each show. By utilizing the .map method and for loops through the fetch, I was able to cut down on the .then code. I also handled some cases where data was not available like in the network images with ternary operations.
