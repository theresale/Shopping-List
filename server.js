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
	console.log(request.body);
	databaseManager.saveProfile(request.body.username,request.body.password,databaseManager.createList);
	response.send(request.body);
});

app.get("/users", function(request, response){
	databaseManager.readProfile(request.query.username, request.query.password, databaseManager.readList,function(data){
		response.send(JSON.stringify(data));
	});
});

app.put("/users", function(request, response){
	databaseManager.updateList(request.body.item, request.body.id);
})
