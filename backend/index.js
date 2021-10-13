import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './src/routers/user.js';
import ticketRouter from './src/routers/ticket.js';
import handleError from './src/utils/errorHandler.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// API SECURITY
app.use(helmet());

// Handle Cors
app.use(cors());

// Logger
if (process.env.NODE_ENV !== 'production'){
  app.use(morgan('tiny'));
}


// Set body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing Routes

app.use('/v1/user', userRouter);
app.use('/v1/ticket', ticketRouter);

app.use('*', (req, res, next) => {
  const error = new Error("Resources not found");
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  handleError(error, res);
})

// Connect MongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(`MongoDB Connected and Server Running on Port: http://localhost:${PORT}`))
.catch((error) => console.log(`${error} did not connect`));

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
