// const MongoCLient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');
 
var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if (err) {
   return  console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({
//     text: 'Something to do' ,
//     completed: 'false'   
// },(err, result) => { 
//     if (err){
//         return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops))
// });

// db.collection('Users').insertOne({
//     name: 'Sumail Hassain' ,
//     age: 17 ,
//     location : 'Iloilo City'
// },(err, result) => { 
//     if (err){
//         return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops))
// });


db.close();
});
