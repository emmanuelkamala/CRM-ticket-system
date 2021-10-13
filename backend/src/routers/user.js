import express from 'express';
import User from '../model/User.js';
import bcrypt from 'bcrypt';
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  res.json({ message: 'returning from user Router' });
  next();
})

userRouter.post('/', async (req, res) => {
  const { name, company, address, phone, email, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({
      name, 
      company, 
      address, 
      phone, 
      email,
      password: hash,
    });
    const user = await newUser.save()
    res.json({ message: 'New user created', user });
  } catch (error) {
    res.json({ status: error.status, message: error.message })
  }
})

export default userRouter;