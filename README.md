# mpa-scafflod
a scafflod project based on handlebars.js, jquery and bootstrap for multiplepages web application

# how to run it?
1 navigate to the root directory(where this README.md file resides)

2 execute: npm i            --> installs all dependencies

3 execute: npm run build     --> this builds the project into ./dist directory and watch changes within ./src directory

4 execute: npm run listen    --> this starts up express.js web-server to serve the ./dist directory
                             --> navigate to http://localhost:3000/index/index.html to
                             --> (it's recommended to use nginx server instead to serve ./dist directory)

5 execute: npm run release   --> this builds the codes into ./dist directory, NO watches

# project structure conventions
1 resources are grouped by pages using directories
  1.1 put page specific .css, .html, and .js files under the same directory, per page per directory

2 pages are placed under ./src/pages directory

3 each page directory should have at least 1 html file

4 each page directory could have multiple js, and css files, and at least 1 js file as 'entry point' for webpack

5 and the 'entry point' js file is configured in ./configs/app.config.js, per entry js file per html page
