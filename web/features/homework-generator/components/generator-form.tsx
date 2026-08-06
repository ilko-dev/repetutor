import { ChevronDown, Sparkles } from "lucide-react";
import { EXAMPLE_TASKS } from "../data";
import { TASK_COUNTS, type Difficulty, type TaskCount } from "../types";

type GeneratorFormProps = {
  example: string;
  taskCount: TaskCount;
  difficulty: Difficulty;
  onExampleChange: (value: string) => void;
  onTaskCountChange: (value: TaskCount) => void;
  onDifficultyChange: (value: Difficulty) => void;
  onGenerate: () => void;
};

const difficulties: { value: Difficulty; label: string }[] = [
  { value: "easy", label: "Легка" },
  { value: "medium", label: "Середня" },
  { value: "hard", label: "Складна" },
];

export function GeneratorForm({ example, taskCount, difficulty, onExampleChange, onTaskCountChange, onDifficultyChange, onGenerate }: GeneratorFormProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_400px]">
      <div className="rounded-xl border border-[#e3e3df] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,.02)] sm:p-6">
        <div className="mb-5 flex items-center justify-between"><div><h2 className="font-semibold tracking-[-0.02em]">Ваш приклад</h2><p className="mt-1 text-[13px] text-[#85857f]">Напишіть задачу або вставте кілька завдань.</p></div><span className="rounded-full bg-[#f2f2f0] px-2.5 py-1 text-[11px] font-medium text-[#777772]">Математика</span></div>
        <textarea aria-label="Приклад задачі" className="h-[184px] w-full resize-none rounded-lg border border-[#deded9] bg-[#fcfcfb] p-4 text-[15px] leading-6 outline-none transition focus:border-[#a6a6a0] focus:ring-2 focus:ring-[#e8e8e3]" onChange={(event) => onExampleChange(event.target.value)} placeholder="Наприклад: Розв'яжіть рівняння..." value={example} />
        <div className="mt-5 flex flex-wrap gap-2"><span className="w-full text-[12px] text-[#92928c] sm:w-auto sm:py-1">Швидкі приклади:</span>{EXAMPLE_TASKS.slice(1).map((task) => <button className="rounded-md border border-[#e1e1dd] px-2.5 py-1 text-[12px] text-[#656560] hover:bg-[#f7f7f5]" key={task} onClick={() => onExampleChange(task)} type="button">{task.length > 30 ? `${task.slice(0, 30)}…` : task}</button>)}</div>
      </div>

      <div className="rounded-xl border border-[#e3e3df] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,.02)] sm:p-6">
        <h2 className="font-semibold tracking-[-0.02em]">Параметри</h2>
        <div className="mt-5 space-y-5">
          <label className="block"><span className="mb-2 block text-[13px] font-medium">Кількість задач</span><div className="relative"><select className="h-10 w-full appearance-none rounded-lg border border-[#deded9] bg-white px-3 text-sm outline-none focus:border-[#a6a6a0]" onChange={(event) => onTaskCountChange(Number(event.target.value) as TaskCount)} value={taskCount}>{TASK_COUNTS.map((count) => <option key={count} value={count}>{count}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-[#85857f]" size={16} /></div></label>
          <div><span className="mb-2 block text-[13px] font-medium">Складність</span><div className="grid grid-cols-3 gap-1 rounded-lg bg-[#f2f2f0] p-1">{difficulties.map(({ value, label }) => <button aria-pressed={difficulty === value} className={`rounded-md py-2 text-xs ${difficulty === value ? "bg-white font-medium shadow-sm" : "text-[#72726d]"}`} key={value} onClick={() => onDifficultyChange(value)} type="button">{label}</button>)}</div></div>
          <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[#e4e4e0] p-3.5"><span><span className="block text-[13px] font-medium">Додати відповіді</span><span className="mt-0.5 block text-[12px] text-[#898983]">Наприкінці документа</span></span><input className="size-4 accent-primary" defaultChecked type="checkbox" /></label>
          <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50" disabled={!example.trim()} onClick={onGenerate} type="button"><Sparkles size={16} /> Згенерувати задачі</button>
          <p className="text-center text-[11px] text-[#969690]">Зазвичай це займає до 10 секунд</p>
        </div>
      </div>
    </div>
  );
}
