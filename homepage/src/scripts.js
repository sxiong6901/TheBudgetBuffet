var unirest = require("unirest");

var req = unirest("GET", "https://recipe-puppy.p.rapidapi.com/");

req.query({
	"p": "1",
	"i": "onions,garlic",
	"q": "omelet"
});

req.headers({
	"x-rapidapi-key": "9a690d0104msh334156481842de6p13b3a3jsn98714ffd81ea",
	"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

$("#Search").on("click",function(event) {
    event.preventDefault();

    if (req.useQueryString."p") {
        
    }

})