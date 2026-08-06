import { FileDown, GraduationCap } from "lucide-react";
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
          <p className="mt-1 text-[13px] text-[#85857f]">Створено {tasks.length} задач за вашим прикладом</p>
        </div>
        <button className="flex h-8 items-center gap-1.5 rounded-lg border border-[#deded9] bg-white px-2.5 text-xs font-medium hover:bg-[#fafafa]" onClick={onCopy} type="button">
          {copied ? "Скопійовано" : "Копіювати текст"}
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-[#deded9] bg-white">
      <div className="flex items-center justify-between border-b border-[#e7e7e3] px-5 py-4"><div className="flex items-center gap-2"><div className="flex size-7 items-center justify-center rounded-md bg-[#f0f0ed]"><GraduationCap size={15} /></div><span className="text-sm font-medium">Лінійні рівняння · тренування</span></div><div className="flex gap-2"><button className="flex h-8 items-center gap-1.5 rounded-md border border-[#dfdfda] px-2.5 text-xs font-medium hover:bg-[#fafafa]" type="button"><FileDown size={14} /> PDF</button><button className="flex h-8 items-center gap-1.5 rounded-md border border-[#dfdfda] px-2.5 text-xs font-medium hover:bg-[#fafafa]" type="button"><FileDown size={14} /> PNG</button></div></div>
      <ol className="grid gap-x-10 gap-y-3 p-5 text-[14px] leading-6 md:grid-cols-2">{tasks.map((task, index) => <li className="flex gap-3" key={task.id}><span className="text-[#999993]">{index + 1}.</span><span>{task.text}</span></li>)}</ol>
      </div>
    </>
  );
}
