#!/usr/local/bin/node


//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');


//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/testlist';

// To access ObjectID we need the following module
var ObjectId = require('mongodb').ObjectID;


////////////////////////////////////////////////////////////////////
// Below function will fetch and push data only for "bugs" field://
//////////////////////////////////////////////////////////////////

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {

	
    // Get the collections
    var collection = db.collection('buglist');
    var linecollection = db.collection('linecoll');
    
	// Using distinct to get values for a particular field in an array
	    collection.distinct("bugs", function (err, result) {

	    	console.log(result);

		      	var arrayLength = result.length;

		      	console.log('Last Value --------->>>>',result[arrayLength-1]);

		      	// Running a for loop over the result and pushing the values to the collection 
		      	//for (var i=0; i<arrayLength; i++){

		      		//console.log(result[i]);
			      	
		      	linecollection.update({"_id" : ObjectId("5716330d7745607233856db2")},{$push: {"data":result[arrayLength-1]}}, function(err,docs){

			    		if (err){
			    			console.log(err);

			    		} else {
			    			console.log("pushing the data");
			    		}
			    		 

			    	db.close();

				});	
		      	//}	
		    		

		}); 

});


/////////////////////////////////////////////////////////////////////
// Below function will fetch and push data only for "cycle" field://
///////////////////////////////////////////////////////////////////

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
	
    // Get the collections
    var collection = db.collection('buglist');
    var linecollection = db.collection('linecoll');
    
	// Using distinct to get values for a particular field in an array
	    collection.distinct("cycle", function (err, result) {

	    	console.log("Second Fetch =============>")
	    	console.log(result);

		      	var arrayLength = result.length;

		      	console.log('Last Value --------->>>>',result[arrayLength-1]);

		      	// Running a for loop over the result and pushing the values to the collection 
		      	//for (var i=0; i<arrayLength; i++){

		      	//console.log(result[i]);
			      	
			    linecollection.update({"_id" : ObjectId("571632f07745607233856db1")},{$push: {"labels":result[arrayLength-1
			    	]}}, function(err,docs){

		    		if (err){
		    			console.log(err);

		    		} else {
		    			console.log("pushing the data");
		    		}
		    		 

		    	db.close();

		    	});	
		      	//}	end of for loop
		    		

		}); 

});
