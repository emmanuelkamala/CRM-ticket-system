import express from 'express';
const ticketRouter = express.Router();

ticketRouter.all('/', (req, res) => {
  res.json({ message: 'returning from ticket Router' });
})

export default ticketRouter;