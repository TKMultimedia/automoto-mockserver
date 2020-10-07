# Automoto mocking data

This will return mock data to client side

# Required software/application

  - Git for managing source code
  - NodeJS version >= 12.0
  - npm/yarn package manager
  - Heroku CLI [link](https://devcenter.heroku.com/articles/heroku-command-line)
 
# Development
Clone the source code
```sh
$ git clone <repo>
```
### Run in local
Install dependencies
```sh
$ npm run install
```
Start the local server
```sh
$ node app.js
```
### Deployment
Login to heroku
```sh
$ heroku login
```
Heroku app setting up
```sh
$ heroku git:remote -a automoto-mocking
```
Deploy to heroku
```sh
$ git push heroku master
```

### Change environment variables
See [this screenshot](https://i.imgur.com/WOtY7Ej.png)
