const MongoClient  = require('mongodb').MongoClient;
//console.log(ObjectID);
MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db)=>{
     if(err){
       return console.log('Unable to connect');
     }
    console.log('connected to mongodb');
    db.collection('User').find({'Name':'Sunil'}).toArray().then((docs)=>{
      console.log(JSON.stringify(docs));
    },(err)=>{
       console.log('Unable to featch');
    });
})
