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
	    //collection.find({}, {"bugs" : 1,"_id":0}).toArray(function(err,result) {
	    
// Using distinct to get values for a particular field
	    collection.distinct("bugs", function (err, result) {

	    	console.log(result);

		      
		      /*if (err) {
		       	console.log(err);

		      	} 

		      	else if (result.length) {
		        
		        console.log('Found:', result);
		         
		         for (var key in result){

		         	console.log(result[key]);
		         }
      	
		      	} 

		      	else {
		        console.log('No document(s) found with defined "find" criteria!');
		      	}*/


		    	// Pushing the results in another collection
		    	linecollection.update({"_id" : ObjectId("572f9d5bf4f230b01378d970")},{$push: {"data":result}}, function(err,docs){

		    		if (err){
		    			console.log(err);
		    		} else {
		    			console.log("pushing the data");
		    		}
		    	});

		    		
		    		

		}); 	       
});

