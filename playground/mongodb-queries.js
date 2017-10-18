const {ObjectID} =  require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user')
var id = '59e592e156b7044251c7876a';
if (!ObjectID.isValid(id)) {
    console.log('ID not Valid');
}
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log ('Todos', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//        return  console.log('ID not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user){
       return  console.log('ID not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));