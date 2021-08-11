import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

// API SECURITY
app.use(helmet());

// Handle Cors
app.use(cors());

// Logger
app.use(morgan('tiny'));

// Set body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
  res.json({message: "Hi Emmanuel"})
})

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));