import { ArrowUpRight, FileText } from "lucide-react";
import { RECENT_HOMEWORK } from "../data";

export function RecentHomework() {
  return (
    <>
      <div className="mb-4"><h2 className="text-lg font-semibold tracking-[-0.03em]">Останні домашні роботи</h2><p className="mt-1 text-[13px] text-[#85857f]">Продовжуйте роботу з останніми матеріалами.</p></div>
      <div className="grid gap-3 sm:grid-cols-3">
        {RECENT_HOMEWORK.map((homework) => (
          <button className="group rounded-xl border border-[#e3e3df] bg-white p-4 text-left transition hover:border-[#cfcfca] hover:shadow-sm" key={homework.title} type="button">
            <div className="mb-6 flex items-start justify-between"><div className="flex size-8 items-center justify-center rounded-lg bg-[#f1f1ed]"><FileText size={16} /></div><ArrowUpRight className="text-[#aaa9a4] opacity-0 transition group-hover:opacity-100" size={16} /></div>
            <h3 className="text-sm font-medium">{homework.title}</h3>
            <p className="mt-1 text-xs text-[#898983]">{homework.taskCount} задач · {homework.createdDaysAgo} дні тому</p>
          </button>
        ))}
      </div>
    </>
  );
}
