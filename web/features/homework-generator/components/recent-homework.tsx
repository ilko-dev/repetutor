import { ArrowUpRight, FileText } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import { RECENT_HOMEWORK } from "../data";

export function RecentHomework() {
  return (
    <>
      <div className="mb-4"><h2 className="text-lg font-semibold tracking-[-0.03em]">Останні домашні роботи</h2><p className="mt-1 text-[13px] text-copy-muted">Продовжуйте роботу з останніми матеріалами.</p></div>
      <div className="grid gap-3 sm:grid-cols-3">
        {RECENT_HOMEWORK.map((homework) => (
          <SurfaceCard className="group p-4 text-left transition hover:border-line-strong hover:shadow-sm" key={homework.title}>
            <button className="w-full text-left" type="button">
            <div className="mb-6 flex items-start justify-between"><div className="flex size-8 items-center justify-center rounded-lg bg-surface-muted"><FileText size={16} /></div><ArrowUpRight className="text-copy-muted opacity-0 transition group-hover:opacity-100" size={16} /></div>
            <h3 className="text-sm font-medium">{homework.title}</h3>
            <p className="mt-1 text-xs text-copy-muted">{homework.taskCount} задач · {homework.createdDaysAgo} дні тому</p>
            </button>
          </SurfaceCard>
        ))}
      </div>
    </>
  );
}
