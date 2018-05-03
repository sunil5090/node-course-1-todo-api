const {MongoClient , ObjectId}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db) => {
  if(err){
    return console.log('Unable to connect');
  }
 console.log('connected to mongodb');
 db.collection('User').deleteMany({Name:'Chunduri'}).then((result) =>{
   console.log(result);
 });
 /*db.collection('User').findOneAndDelete({'_id':new ObjectId('5aeb0174fb5bd9244b1e8dee')}).then((result) => {
   console.log(result);
 });*/
})
