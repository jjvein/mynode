var jsdom = require("jsdom");

jsdom.env(
  "https://iojs.org/dist/",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    console.log("there have been", window.$("a").length - 4, "io.js releases!");
  }
);


jsdom.env(
  '<p><a class="link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
  ['http://code.jquery.com/jquery.js'],
  function(err, window){
    var text = window
    console.log(window.$('a').text())
  }
)
