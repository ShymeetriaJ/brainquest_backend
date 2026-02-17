import { Question, RankInfo } from '../models/quizModel';

export const questions: Question[] = [
  {
    id: 1,
    question: "What comes next: 2, 6, 18, 54, ___?",
    hint: "Look for the pattern — what's happening each time?",
    answers: ["108", "162", "72", "148"],
    correct: 1,
    topic: "patterns",
  },
  {
    id: 2,
    question:
      "A farmer has 15 apples. He gives away 1/3 and eats 2. How many are left?",
    hint: "Break it into steps — divide first, then subtract.",
    answers: ["8", "10", "7", "5"],
    correct: 0,
    topic: "fractions",
  },
  {
    id: 3,
    question:
      "If all Bloops are Razzies, and all Razzies are Lollies, are all Bloops definitely Lollies?",
    hint: "Think about it like a chain — A is inside B, B is inside C...",
    answers: ["Yes", "No", "Maybe", "Not enough info"],
    correct: 0,
    topic: "logic",
  },
  {
    id: 4,
    question:
      "You have a 3×3 grid. Each row, column, and diagonal must add up to 15. What goes in the center?",
    hint: "This is a famous puzzle — the center number is always the same!",
    answers: ["4", "6", "5", "7"],
    correct: 2,
    topic: "puzzles",
  },
];

export const ranks: Record<number, RankInfo> = {
  0: {
    icon: "🔰",
    rank: "PUZZLE ROOKIE",
    message:
      "Every legend starts somewhere! You've taken your first step into the arena. Ready to train up?",
    color: "#00d4ff",
    link: "https://www.khanacademy.org/math/arithmetic",
    linkLabel: "Start your math training",
  },
  1: {
    icon: "⚡",
    rank: "CIRCUIT STARTER",
    message:
      "Your brain circuits are warming up! A little more practice and you'll be solving puzzles in your sleep.",
    color: "#00d4ff",
    link: "https://www.khanacademy.org/math/arithmetic",
    linkLabel: "Power up your skills",
  },
  2: {
    icon: "🔥",
    rank: "LOGIC WARRIOR",
    message:
      "Nice work! You've got solid problem-solving instincts. Sharpen them even more and aim for Legend status!",
    color: "#39ff14",
    link: "https://www.khanacademy.org/math/pre-algebra",
    linkLabel: "Level up your training",
  },
  3: {
    icon: "💎",
    rank: "BRAIN MASTER",
    message:
      "Impressive! Only the sharpest minds reach this level. One more correct and you'd be a Legend!",
    color: "#39ff14",
    link: "https://www.khanacademy.org/math/pre-algebra",
    linkLabel: "Push to the next level",
  },
  4: {
    icon: "👑",
    rank: "LOGIC LEGEND",
    message:
      "PERFECT SCORE! You are the ultimate brain champion. Your logic skills are absolutely elite!",
    color: "#39ff14",
    link: "https://www.khanacademy.org/math/algebra-basics",
    linkLabel: "Challenge yourself further",
  },
};