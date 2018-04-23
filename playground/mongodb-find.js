const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
{
  return console.log('Unable to connect MongoDB server');
}

var db=client.db('TodoApp');
console.log('Connect to MongoDB server.');

db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetch Todos',err);
});

client.close();
});
