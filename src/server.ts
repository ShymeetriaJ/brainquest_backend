import dotenv from 'dotenv';
dotenv.config();

import express, { Application } from 'express';

import cors from 'cors';

import quizRoutes from './routes/quizRoutes';

const app: Application = express();

const PORT: number = parseInt(process.env.PORT || '3000');

app.use(cors({
  origin: 'https://brainquest-frontend.onrender.com'
}));

app.use(express.json());

app.use('/api/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`🧠 Brain Quest Arena server running on http://localhost:${PORT}`);
});