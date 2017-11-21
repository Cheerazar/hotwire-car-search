## Hotwire Search App

The app is deployed on [AWS]. The source code for the client application can be found in the [hotwire-car-search] repository. The server to make requests to Hotwire is found in the [hotwire-search-proxy] repo.

The app was started with `create-react-app` due to how quickly I could get it off the ground with React and also it comes prepackaged with a webpack configuration.

For this project I broke it in to two main pieces, which are the `SearchBox` and `SearchResults` components. The `SearchResult` and `SearchBox` components have a lot of subcomponents within them as of the moment and I decided to do this as they aren't currently being used elsewhere. If they were to be used in other sections of the app in the future, it would be sensible to refactor those out in to their own files for modularity.

For requests I used the `axios` package, as it works on both the client and the server, which is very useful. This allows you to use the same package across the full stack and reduces the number of dependencies required.

I also added a number of linting tools and configurations since I like my code to have a certain style. Prettier makes this very easy as it will fix things before a save, which allows me to be more productive.

Throughout the app I used flexbox to perform the layout. I chose this as it's relatively easy to form desirable layouts. I used the `glamorous` module to help with isolating styling. It also allows the use of pseudo-classes and other great features that I would use more in future improvements.

There are a number of future improvements to be made to the project:

  * Add in test coverage for the app, as there is none as of the moment
  * Potentially refactor additional components in SearchResult to their own files.
  * The "Search" button should be disabled until valid inputs are present
  * There should be input validation for the destination as well as the dates
  * Users should be able to pick their pickup and drop off times. Currently the project defaults to a pickup time of 10am and a drop off of 1:30pm.
  * Users should have a better way to enter dates for car rentals, such as a date picker
  * Users should be able to see local currencies and also text localization
  * Users should be able to copy and paste the URL to share with people
  * Users should be able to see a picture of the type of car they may be renting
  * Users should be able to see indicators of what they're hovering over as they navigate the site
  * Users should be able to search for cities that aren't near airports. The structure of the search result is different and isn't currently handled
  * If there are errors they aren't being displayed to the user

[hotwire-car-search]:https://github.com/Cheerazar/hotwire-car-search
[hotwire-search-proxy]:https://github.com/Cheerazar/hotwire-search-proxy
[AWS]:http://hotwiresearch-hosting-mobilehub-138361554.s3-website-us-east-1.amazonaws.com
