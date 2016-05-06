//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');


//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/testlist';

var ObjectId = require('mongodb').ObjectID;

//Initializing empty arrays for cycle and bugs
var cycle = [];
var bugs = [];


// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {

    // Get the collection
    var collection = db.collection('buglist');
    var linecollection = db.collection('linecoll');
    

    // Getting buglist data
	    //collection.find().forEach(function(myDoc) { 
	    collection.find().toArray(function(myDoc) {

	    	console.log( "name: " + myDoc.cycle );

	    	// Pushing the data to an array and later we would push it to another collection
	    	cycle.push(myDoc.cycle); 
	    	bugs.push(myDoc.bugs);

	    	// Printing the arrays
	    	console.log(cycle);
	    	console.log(bugs);

		    	// Getting linecollec data:
		    	//linecollection.find().forEach(function(doc){

		    	//	console.log("Line collection data =========>")
		    	//	console.log(doc);
		    	//	console.log("Buglist ++++++++++",bugs)

		    	linecollection.update({"_id" : ObjectId("5716330d7745607233856db2")},{$push: {"data":10000}}, function(err,docs){

		    		if (err){
		    			console.log(err);
		    		} else {
		    			console.log("pushing the data");
		    		}
		    	});

		    		
		    		

		}); 	       
});


/*
MongoClient.connect(url, function(err,db){
	if (err) {
		console.log(err)
	} else {

		//Get the collection
		var linecoll = db.collection('linecoll');


		linecoll.find().forEach(function(doc){
			console.log("Line Collection data ------>")
			console.log(doc);

		db.close();

		});
	};
}); */