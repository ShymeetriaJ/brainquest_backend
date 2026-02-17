export interface Question {
  id: number;            
  question: string;     
  hint: string;         
  answers: string[];     
  correct: number;   
  topic: string;         
}

export interface RankInfo {
  icon: string;         
  rank: string;         
  message: string;       
  color: string;         
  link: string;          
  linkLabel: string;     
}

export interface QuizResponse {
  questions: Question[];       
  ranks: Record<number, RankInfo>;  
}