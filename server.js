var express = require("express");
var app = express();
var databaseManager = require("./database-manager.js");

app.use(express.static("public"));
app.listen(3000,function(){
	console.log("listening on port", 3000);
});

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post("/users", function(request, response){
	databaseManager.saveProfile(request.body.username,request.body.password,databaseManager.createList);
	response.send(request.body);
});

app.get("/users", function(request, response){
	databaseManager.readProfile(request.query.username, request.query.password, databaseManager.readList);
	//console.log(request);
});

app.put("/users", function(request, response){
	console.log(request.body.item[0]);
	//databaseManager.updateList(item,24);
})
