Kenan, 

I made an example usage and some comments to help you understand in app.js. Start at the top.

routes.js is used for changing pages. The only page it goes to automatically is the first page. The rest are called from those pages html / js files

Each controller is matched to the similar naming html file. 

make sure to use "ionic serve --livereload" so it refreshes any time you make changes. Use firefox and firebug and keep an eye on the console for any errors. It will tell you exactly what you are doing wrong. 

I'm sure you know this but add any js files to the js folder and make sure to reference it from index.html under where it says   "your app's js"

Good luck :)


