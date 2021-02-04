var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var name = request.query.name;
	var description = request.query.description;
	var obj = {};
	obj["name"] = name;
	obj["description"] = description;
	obj["imageURL"] = "https://loremflickr.com/320/240/person";
	data.friends.push(obj);
	response.render('index', data);
 }