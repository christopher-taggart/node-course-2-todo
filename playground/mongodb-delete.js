// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  //});
//delete one
 // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
 //   console.log(result);
 // });
//findOne and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // })

  //delete dupes
  // db.collection('Users').deleteMany({name: 'Chris'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5bc3e9973ee96c05989666f9')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  });
  //db.close();
});
