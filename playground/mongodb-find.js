const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if (err) {
  return  console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').find({
//     _id : new ObjectID('59e4a65c29b8e9106b209970')
// }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=> {
//     console.log('Unable to fetch todso',err)
// });
db.collection('Users').find({name: 'Sumail Hassain'}).toArray()
.then((docs) => {
    console.log('TUsers');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch todo\'s ');
});

//db.close();
});