import User from './User.schema.js';

export const insertUser = userObj => {
  User(userObj)
    .save()
    .then(data => console.log(data))
    .catch(error => console.log(error))
}