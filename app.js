var express=require("express");
var morgan=require("morgan");
var swig=require("swig");
var app=express();
var routes=require("./routes/");
app.use("/",routes);
app.use(express.static(__dirname + '/public'));
//var _=require("underscore");
//var logger=morgan("dev");
app.use(morgan('dev'));
app.engine("html", swig.renderFile);
app.set("view engine","html");
app.set("views",__dirname + '/views');
swig.setDefaults({ cache: false });



// app.get('/', function (req, res) {
//   //res.send('Hello World!');
//   var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render( 'index', {title: 'Hall of Fame', people: people} );

// });

// app.get('/blah', function (req, res) {
//   res.send('Hello Blah!');
// });

/*var server = */app.listen(3000, function () {

  //var host = server.address().address;
  //var port = server.address().port;

  console.log('server listening');

});
