const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
if(err)
{
  return console.log('Unable to connect MongoDB server');
}

var db=client.db('TodoApp');
console.log('Connect to MongoDB server.');

/*db.collection('Todos').insertOne({
  text: 'Some to do',
  completed:false
},(err,result)=>{
  if(err)
  {
    return console.log('Unable to insert todo',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});*/





db.collection('User').insertOne({
 name : 'Dereje',
  age:28,
  location:'Ethiopia'
},(err,result)=>{
  if(err)
  {
    return console.log('Unable to insert todo',err);
  }
  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
});

client.close();
});
