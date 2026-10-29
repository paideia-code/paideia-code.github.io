export type Level = 'básico' | 'intermedio' | 'avanzado';
export type Question = {
  id: string;
  revision: number;
  contentId: string;
  topic: string;
  level: Level;
  skill: 'concepto' | 'aplicación' | 'análisis';
  prompt: string;
  options: {
    id: string;
    text: string;
    explanation: string;
  }[];
  correctIds: string[];
  explanation: string;
  source: string;
};
export type QuizPreset = {
  id: string;
  title: string;
  description: string;
  questionIds: string[];
};
export type QuestionBank = {
  id: string;
  revision: number;
  contentId: string;
  title: string;
  questions: Question[];
  presets: QuizPreset[];
};
export type LearningContent = {
  id: string;
  title: string;
  description: string;
  href: string;
  area: string;
  kind: string;
  level: Level;
  topics: string[];
  objective: string;
};
export type LearningStage = {
  id: string;
  title: string;
  description: string;
  topics: string[];
  href?: string;
};

export type LearningLesson = {
  id: string;
  title: string;
  href?: string;
};

export type LearningChapter = LearningStage & {
  lessons?: LearningLesson[];
  children?: LearningChapter[];
};
