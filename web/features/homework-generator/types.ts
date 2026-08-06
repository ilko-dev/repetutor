export const TASK_COUNTS = [3, 5, 8, 10] as const;

export type TaskCount = (typeof TASK_COUNTS)[number];
export type Difficulty = "easy" | "medium" | "hard";

export type HomeworkTask = {
  id: string;
  text: string;
};
