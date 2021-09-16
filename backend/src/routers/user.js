import express from 'express';
const userRouter = express.Router();

userRouter.all('/', (req, res, next) => {
  // res.json({message: 'returning from user Router'})
  next()
})

userRouter.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body)
})

export default userRouter;