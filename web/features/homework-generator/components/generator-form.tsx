import { ChevronDown, Sparkles } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { EXAMPLE_TASKS } from "../data";
import { TASK_COUNTS, type Difficulty, type TaskCount, type TaskImage } from "../types";
import { TaskImageUpload } from "./task-image-upload";

type GeneratorFormProps = {
  example: string;
  taskCount: TaskCount;
  difficulty: Difficulty;
  images: TaskImage[];
  onExampleChange: (value: string) => void;
  onImagesAdd: (files: FileList | File[]) => void;
  onImageRemove: (imageId: string) => void;
  onTaskCountChange: (value: TaskCount) => void;
  onDifficultyChange: (value: Difficulty) => void;
  onGenerate: () => void;
};

const difficulties: { value: Difficulty; label: string }[] = [
  { value: "easy", label: "Легка" },
  { value: "medium", label: "Середня" },
  { value: "hard", label: "Складна" },
];

export function GeneratorForm({ example, taskCount, difficulty, images, onExampleChange, onImagesAdd, onImageRemove, onTaskCountChange, onDifficultyChange, onGenerate }: GeneratorFormProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_400px]">
      <SurfaceCard className="p-5 sm:p-6" elevated>
        <div className="mb-5 flex items-center justify-between"><div><h2 className="font-semibold tracking-[-0.02em]">Ваш приклад</h2><p className="mt-1 text-[13px] text-copy-muted">Напишіть завдання або завантажте кілька завдань.</p></div></div>
        <textarea aria-label="Приклад завдання" className="h-[184px] w-full resize-none rounded-lg border border-line-strong bg-surface p-4 text-[15px] leading-6 outline-none transition focus:border-focus focus:ring-2 focus:ring-focus/20" onChange={(event) => onExampleChange(event.target.value)} placeholder="Наприклад: Розв'яжіть рівняння..." value={example} />
        <TaskImageUpload images={images} onImageRemove={onImageRemove} onImagesAdd={onImagesAdd} />
        <div className="mt-5 flex flex-wrap gap-2"><span className="w-full text-[12px] text-copy-muted sm:w-auto sm:py-1">Швидкі приклади:</span>{EXAMPLE_TASKS.slice(1).map((task) => <button className="rounded-md border border-line px-2.5 py-1 text-[12px] text-copy hover:bg-surface-hover" key={task} onClick={() => onExampleChange(task)} type="button">{task.length > 30 ? `${task.slice(0, 30)}…` : task}</button>)}</div>
      </SurfaceCard>

      <SurfaceCard className="p-5 sm:p-6" elevated>
        <h2 className="font-semibold tracking-[-0.02em]">Параметри</h2>
        <div className="mt-5 space-y-5">
          <label className="block"><span className="mb-2 block text-[13px] font-medium">Кількість завдань</span><div className="relative"><select className="h-10 w-full appearance-none rounded-lg border border-line-strong bg-surface px-3 text-sm outline-none focus:border-focus" onChange={(event) => onTaskCountChange(Number(event.target.value) as TaskCount)} value={taskCount}>{TASK_COUNTS.map((count) => <option key={count} value={count}>{count}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-3 text-copy-muted" size={16} /></div></label>
          <div><span className="mb-2 block text-[13px] font-medium">Складність</span><div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-muted p-1">{difficulties.map(({ value, label }) => <button aria-pressed={difficulty === value} className={`rounded-md py-2 text-xs ${difficulty === value ? "bg-surface font-medium shadow-sm" : "text-copy"}`} key={value} onClick={() => onDifficultyChange(value)} type="button">{label}</button>)}</div></div>
          <label className="flex cursor-pointer items-center justify-between rounded-lg border border-line p-3.5"><span><span className="block text-[13px] font-medium">Додати відповіді</span><span className="mt-0.5 block text-[12px] text-copy-muted">Наприкінці документа</span></span><input className="size-4 accent-primary" defaultChecked type="checkbox" /></label>
          <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50" disabled={!example.trim() && images.length === 0} onClick={onGenerate} type="button"><Sparkles size={16} /> Згенерувати завдання</button>
          <p className="text-center text-[11px] text-copy-muted">Зазвичай це займає до 10 секунд</p>
        </div>
      </SurfaceCard>
    </div>
  );
}
