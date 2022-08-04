# TrendingTVShow

See today's top trending TV shows. This site shows the top 12 trending TV shows across multiple streaming sites using the TMDB API.

https://trendingstreamingshows.herokuapp.com/

![image](https://user-images.githubusercontent.com/104634518/181853753-ba2e1701-3acb-48fb-8237-a62a05c54f85.png)


## <b>How It's Made:</b>

<b>Tech used:</b> HTML, CSS, JavaScript, Node, Express

The app connects to the TMDB API by first connecting to the URL for today's top trending shows. Once we have today's trending shows, it then connects to other URLs on the database to provide more information on the individual shows. This mainly done through mapping and iterating over the data to display in the HTML. The site is built to be responsive with Flexbox. I set up the server side with Node and Express to deploy this to Heroku so that it is accessible to all. 

## <b>Optimizations:</b>

I cut down on code by implementing more .map methods. The data that needs to be accessed from the trending API is a different URL from each individual show, so I needed to get each show URL to get more specific data. This runs smoother with multiple fetches. I also increased the max-width and height for the cards after seeing over time that there are some long titles and bigger poster images.
