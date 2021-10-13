import express from 'express';
import { insertUser } from '../model/User.model.js';
const userRouter = express.Router();

userRouter.all('/', (req, res, next) => {
  // res.json({message: 'returning from user Router'})
  next()
})

userRouter.post('/', async (req, res) => {
  const result = await insertUser(req.body);
  console.log(result);
  res.json({ message: 'New user has been created', result})
})

export default userRouter;