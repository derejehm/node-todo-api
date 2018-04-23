const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
{
  return console.log('Unable to connect MongoDB server');
}

var db=client.db('TodoApp');
console.log('Connect to MongoDB server.');

/*
db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  console.log(result);
});*/

/*db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  console.log(result);
});*/

db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);
});
client.close();
});
