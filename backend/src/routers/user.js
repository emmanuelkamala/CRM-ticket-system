import express from 'express';
import User from '../model/User.js';
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  res.json({ message: 'returning from user Router' });
  next();
})

userRouter.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const user = await newUser.save()
    res.json({ message: 'New user created', user });
  } catch (error) {
    res.json({ status: error.status, message: error.message })
  }
})

export default userRouter;