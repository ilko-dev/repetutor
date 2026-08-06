import type { HomeworkTask } from "./types";

export const EXAMPLE_TASKS = [
  "Розв'яжіть рівняння: 3(x − 4) = 2x + 5",
  "Знайдіть значення виразу: (2a − 3)², якщо a = 4",
  "Розкладіть на множники: x² − 9x + 20",
] as const;

export const GENERATED_TASKS: HomeworkTask[] = [
  { id: "equation-1", text: "Розв'яжіть рівняння: 4(x − 3) = 3x + 7" },
  { id: "equation-2", text: "Розв'яжіть рівняння: 5(2x + 1) − 3x = 18" },
  { id: "factors-1", text: "Розкладіть на множники: x² − 11x + 24" },
  { id: "simplify-1", text: "Спростіть вираз: (3a − 2)(a + 4) − 3a²" },
  { id: "value-1", text: "Знайдіть значення виразу: 2(x − 5)², якщо x = 8" },
  { id: "equation-3", text: "Розв'яжіть рівняння: 6(x + 2) = 4x + 18" },
  { id: "factors-2", text: "Розкладіть на множники: x² − 7x + 10" },
  { id: "value-2", text: "Знайдіть значення виразу: (4b + 1)², якщо b = 2" },
  { id: "equation-4", text: "Розв'яжіть рівняння: 8 − 2(3x − 1) = 4x" },
  { id: "simplify-2", text: "Спростіть вираз: 5y − 2(y − 4) + 3" },
];

export const RECENT_HOMEWORK = [
  { title: "Квадратні рівняння", taskCount: 10, createdDaysAgo: 2 },
  { title: "Лінійні функції", taskCount: 8, createdDaysAgo: 3 },
  { title: "Підготовка до НМТ", taskCount: 12, createdDaysAgo: 4 },
] as const;
