//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');


//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;


// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/anupam';


// Use connect method to connect to the Ser
MongoClient.connect(url, function (err, db) {

    // Get the collection
    var collection = db.collection('testcoll');

    // Using Cursor
    collection.find().forEach( function(myDoc) { 
    	console.log( "name: " + myDoc.tab ); 

	}); 

      
});

//console.log(result)