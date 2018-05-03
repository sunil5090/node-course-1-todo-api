const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,db) =>{
    if(err){
      return console.log('Unable to connect');
    }
    console.log('connected to mongodb');
    /*db.collection('Todo').insert({
      'a':2,
      'b':3
    },(err,result)=>{
        if(err)
        {
          return console.log('unable to insert' + err);
        }
        console.log(JSON.stringify(result.ops))
    }); */
    db.collection('User').insert({
      'Name' : 'Sunil',
      'Age'  : 26,
      'Location' : 'Delhi'
    },(err,result)=>{
        if(err){
           return console.log(`unable to insert user details ${err}`);
        }
        console.log(JSON.stringify(result.ops));
    })
    db.close();
});
