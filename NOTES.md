##Phase One
Build an express app using the express App using the express app generator [Express Generator](npm install express-generator -g)
1)`sudo npm install express-generator -g`
  -only need to do this ONCE
  -to use -> `express (name of app)`
2) `express my_blog`
ignore `node_modules` with the command `echo 'node_modules' >> .gitignore`
Delete any unnecessary things the generator created
  -i.e. views folder and any view engine middleware
  -public directory

Take the app for a spin
Throw a test in beneath the first app.use's in app.js(basically a server.js)
`app.get('/test', function (){
  res.json({message: " App is barely functioning"})
});`

update server in bin/www to use port3001

test endpoint using PostMan

If it is functional, commit your code

###Configure MongoDB
  -install any dependencies(mongo, mongoose)  via `npm install --save mongoose`
  -add configuration to DB line via:
    -make a new folder named 'config', new file called 'database-connect.js'
      ```var mongoose = require('mongoose');

      module.exports = () => {
        mongoose.connect('mongodb://localhost/my_blog');
        console.log('Database running')
      }
      ```
      -then require that file into 'app.js' with `require('./config/database-connection')();`
  -commit code

### begin API Phase
  -checkout to a safe branch `git checkout -b articles`
  -create article model
  -create routes folder, and 'routes/articles.js' file
  -create endpoints in 'routes/articles' ONE AT A TIME and continually test using postman

  ****** DON'T FORGET! to MOUNT things in your app.js
  `app.use('/api/articles', articleRoutes);`
  *********

  -Once they ALL work!
    -`git add -A`
    -`git commit -m "message"`
    -`git push origin Articles` -> pushes it to new branch
    -`git checkout master`
    -`git merge Articles` -> brings new code into articles
    -`git push origin master` -> syncs master branch with new code

Create a new folder to hold the routes folder.
Index.js makes it easier to add routes. Makes it easier to have user types.
changed routes from 'router.route' to exports.'name'
 removed our app.use with our 'api/routes' etc. and changed it to routes(app);(app.js 25:00)

 Testing:
Use Mocha, Chai, & chai-http to run your test suite. In order to have a seperate DB for testing purposes, add this script to your `package.json`
`    "test": "NODE_ENV=test mocha --no-deprecation --sort --colors --inline-diffs --bail"
`
####phase two:
we are going to use 'custom react scripts' to bootstrao our react app( in the past we have used create-react-app) this will give us a bit more control over our configuration

[custom-react-scripts](https://www.npmjs.com/package/react-scripts/custom)
'npm install -g create-react-app'
then we will cut out the extra stuff, and reconfigure the directory to our liking
`cd client`
`npm start`
then `npm run eject` to make your webpack work
 once you have a new 'client' folder in your project, make sure to delete from 'src', everything but App.css, App.js, and index.js

 add react router into your client folder with: `npm install --save react-router@3`
