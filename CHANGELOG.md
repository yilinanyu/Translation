##### 0.0.1
 - Updated server.js to run express server that accepts /api route with param "url"
 - Returns content of the provided website
 - Updated Gulp task so that it has better messaging 
 
 
### TODO
    - Update the checkTranslation() method so that it calls API and console logs the content
        - When the "Check" button is clicked
            - It should makes an ajax call to /api
            - Once the content is received from ajax, console the content
    - To make the ajax call look into axios module (https://www.npmjs.com/package/axios)

        
    - ## Notes
        - Refactor the checkTranslation() method so that 
            - It makes the ajax call only when the check button is clicked
            - It shouldn't make ajax call when page is loaded
            - perhpas we can pass a param/boolean that handles this logic. 
    