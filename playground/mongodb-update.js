const {MongoClient, ObjectID} = require ('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
if (err) {
  return  console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');


// db.collection('Todos').findOneAndUpdate({
//   _id : new ObjectID('59e56c5239c8dc3077c67a7c') 
// }, {
//   $set: {
//         completed : true 
//       }
//     },{
//     returnOriginal : false
//     }).then((result) => {
//       console.log(result);
//     })
db.collection('Users').findOneAndUpdate({
  _id : new ObjectID('59e543a739c8dc3077c66f73') 
}, {
  $set: {
        name : 'Elon Musk',
        location : "Mars"
  },
  $inc: {
          age : 2  
  }
},{
  returnOriginal : false
    }).then((result) => {
      console.log(result);
    });
  
  });    

//db.close();
