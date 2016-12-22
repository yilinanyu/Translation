##### Translation Checker
    Application that checks if a page content has been translated to a different language or not. 
    If sentences aren't translated is displays list of the work that locale. 
    The app is fully functional in localhost.
    

##### How do I run this app?
    We need run two servers for this app to work. 
         - $ npm start 
            (starts Node(Express) server for the API)
        - $ gulp 
            Gulp server for serving website in localhost 

#### API
    The API takes an URL and returns the content, only text, of the provided URL.
    When call the API, the url key/value must be passed.
        - /api/?url=www.website.com
        
##### Is the API working?
    To test the API, run the commands in "How do I run this app" section.
    Once that is done. Go to local host with port number that's defined in server.js and pass required params
        
        http://localhost:8055/api?url=http://www.tesla.com/powerwall