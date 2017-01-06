##### 0.0.1
 - Updated server.js to run express server that accepts /api route with param "url"
 - Returns content of the provided website
 - Updated Gulp task so that it has better messaging


### TODO
    - Grab the english version of each page so that we can compare it with non-english page
    - Once the pages fetched, store them in variables
    - Grab only the text content
        - like html elements a, p, h1-h6, button ... and so on. Check page HTML code and see what tags are used
        - look into 'cheerio' node module. You should be able to use it like jQuery
        - using cheerio grab the text content

        /powerwall
            var powerwall = []
            // once we receive the content from api. inject to powerwall array
               // tesla.com/fr_CA/powerwall
               powerwall.push({en_US: content})
               powerwall.push({fr_CA: content})

               // will result to
               powerwall = [
                    {en_US: content},
                    {fr_CA: content}
               ]
