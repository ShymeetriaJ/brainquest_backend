import { Request, Response } from 'express';

import { questions, ranks } from '../config/quizData';

export const getQuizData = (req: Request, res: Response): void => {
  res.json({
    questions: questions,
    ranks: ranks,
  });
};

export const getQuestions = (req: Request, res: Response): void => {
  res.json(questions);
};

export const getRanks = (req: Request, res: Response): void => {
  res.json(ranks);
};