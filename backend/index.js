import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './src/routers/user.js';
import ticketRouter from './src/routers/ticket.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// API SECURITY
app.use(helmet());

// Handle Cors
app.use(cors());

// Logger
app.use(morgan('tiny'));

// Set body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/user', userRouter);
app.use('/v1/ticket', ticketRouter);

app.use('*', (req, res) => {
  res.json({message: "Resource not found"})
})

// Connect MongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

mongoose.connection.on('open', ()=>{ console.log('mongoDB is connected') });
mongoose.connection.on('error', ()=>{ console.log(error) }); 


// .then(() => app.listen(PORT, () => console.log(`MongoDB Connected and Server Running on Port: http://localhost:${PORT}`)))
// .catch((error) => console.log(`${error} did not connect`));

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))