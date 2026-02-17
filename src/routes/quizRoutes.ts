import { Router } from 'express';

import { getQuizData, getQuestions, getRanks } from '../controllers/quizController';

const router: Router = Router();

router.get('/', getQuizData);

router.get('/questions', getQuestions);

router.get('/ranks', getRanks);

export default router;
