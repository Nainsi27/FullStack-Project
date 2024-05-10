 ## Full stack connection 
      https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW   --->>> youtube


# frontend 

# terminal -->>>
npm create vite@latest .
ls 
npm install
npm run dev

# then 
app.jsx --->>> directory write code 

# then 
# install axios
        npm i axios
        https://www.npmjs.com/package/axios

# Axios -->>>>  Promise based HTTP client for the browser and node.js

            extra feature and functionality deta hai, 
            webex krne ke liya 
            data kis tarah se aa rha hai, data kaise handle krna h, fail ho gya to kya situation hogi, loading hoti to kya situation hogi, 
            bich me rokkr kuch add krna ho usme, 
            eg-> api key se request bhej rhe h, but basically request bhej rhe, tb api keys roko aur add krdo api keys,.. ==>> production level features 

# -------------------------------------------------------
            Make XMLHttpRequests from the browser
            Make http requests from node.js
            Supports the Promise API
            Intercept request and response
            Transform request and response data
            Cancel requests
            Automatic transforms for JSON data
            🆕 Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings


# CORS  ERROR
        CORS policy => security error, origin ko allow krte and other ko not allow krta hai. koi data nhi le skta,origin same hota hai. 

Backend => IP whitelist, ya domain whitelist, krlo
     Backend kam krta hai yesb.

## Backend me server.js file
        npm i cors
        https://www.npmjs.com/package/cors

# error come in frontend console check  --->>
        using PROXY CONCEPT

## PROXY 
# Proxy  :--- proxy create react app
    https://create-react-app.dev/docs/proxying-api-requests-in-development/

# Proxy  :--- proxy vite --->>>> proxy vite se bnaya h 
        https://vitejs.dev/config/server-options

## --->>> open vite.config.js file  ==>> then add ,   proxy only append nhi krta sbhi url ko but also wo same  http://localhost:4000 ke data ko hi allow krta hai.

    server : {
       proxy : {
         '/api' : 'http://localhost:4000',
       }
   },



## generate build --->>> to deploy on production 
        npm run build
             ---->>> generated --> dist (distribution) folder ---->> this folder havinf frontend code.

## then dist folder move into backend folder ---->>>> then Use MiddleWare,  in server.js file  and static acid serve kr skte h.
 then add middleware syntax in server.js file.
# syntax
    app.use(express.static('dist')); 
#                      run on localhost static website(build) --------------- http://localhost:4000/
  #                                 backend API   ------------------------  http://localhost:4000/api/jokes
   #                               frontend website -------------------------  http://localhost:5173/
      app.use -->> middleware h, GET/POST ye serve h.

        ## Deploy on Vercel or Netlify

            

## Middleware in backend 
Middleware is a function that has access to the req(request), res(response), next() functions as parameters.

1. Authentication middleware :--->>> check if user logged in or not . If not then redirect him to login page.
2. Logging middleware :------> log every request made by client.
3. Body parsing middleware :------> parse body of the request and put it into req.body property.

## Syntax : 
app.use(middleware_function , "route" , "method");  

Example :
app.use(logger , "/" , "GET") ;
    OR  
    app.use("/" , logger);
    ## Deployment --->>
    1. Heroku :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    Sign up at heroku.com -> click new project -> connect git -> push your code there -> go to setting tab -> scroll down -> open:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 
   
# API ROUTES  
## GET /products                      -> get all products
## POST /products                     -> add new product
{name:'', price=''}

## PUT /products/:id   


