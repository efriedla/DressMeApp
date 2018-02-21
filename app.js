var methodOverride = require('method-override'),
    express = require("express"),
    app = express(),
    request = require("request"),
    bodyparser = require("body-parser");

// seedDB();
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride('_method'));

/**Home route*/
app.get("/", function(req, res){
    res.render("home");
});
/** closet route*/
app.get("/closet", function(req, res){
    res.render("closet");
});
/** Loves route*/
app.get("/loves", function(req, res){
    res.render("loves");
});
/** inventory route*/
app.get("/inventory", function(req, res){
    res.render("inventory");
});

// "error message" 
app.get("*", function(req, res){
    res.send("Hey beautiful, make a wrong turn?");
    // console.log("someones lost");
});

app.listen(3000, () => console.log('Started'));