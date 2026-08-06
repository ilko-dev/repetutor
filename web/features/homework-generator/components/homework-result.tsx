import { FileDown, GraduationCap } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { HomeworkTask } from "../types";

type HomeworkResultProps = {
  copied: boolean;
  tasks: HomeworkTask[];
  onCopy: () => void;
};

export function HomeworkResult({ copied, tasks, onCopy }: HomeworkResultProps) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.03em]">Готово до експорту</h2>
          <p className="mt-1 text-[13px] text-copy-muted">Створено {tasks.length} задач за вашим прикладом</p>
        </div>
        <button className="flex h-8 items-center gap-1.5 rounded-lg border border-line-strong bg-surface px-2.5 text-xs font-medium hover:bg-surface-hover" onClick={onCopy} type="button">
          {copied ? "Скопійовано" : "Копіювати текст"}
        </button>
      </div>
      <SurfaceCard className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-4"><div className="flex items-center gap-2"><div className="flex size-7 items-center justify-center rounded-md bg-surface-muted"><GraduationCap size={15} /></div><span className="text-sm font-medium">Лінійні рівняння · тренування</span></div><div className="flex gap-2"><button className="flex h-8 items-center gap-1.5 rounded-md border border-line px-2.5 text-xs font-medium hover:bg-surface-hover" type="button"><FileDown size={14} /> PDF</button><button className="flex h-8 items-center gap-1.5 rounded-md border border-line px-2.5 text-xs font-medium hover:bg-surface-hover" type="button"><FileDown size={14} /> PNG</button></div></div>
      <ol className="grid gap-x-10 gap-y-3 p-5 text-[14px] leading-6 md:grid-cols-2">{tasks.map((task, index) => <li className="flex gap-3" key={task.id}><span className="text-copy-muted">{index + 1}.</span><span>{task.text}</span></li>)}</ol>
      </SurfaceCard>
    </>
  );
}
