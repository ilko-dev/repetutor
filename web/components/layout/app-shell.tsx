import type { ReactNode } from "react";
import {
  ChevronDown,
  CircleHelp,
  FileText,
  FolderOpen,
  MoreHorizontal,
  Settings,
  Sparkles,
  WandSparkles,
} from "lucide-react";

type AppShellProps = {
  children: ReactNode;
};

const recentHomework = ["Квадратні рівняння", "Дроби · 7 клас", "Підготовка до НМТ"];

export function AppShell({ children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-[#f8f8f7] text-[#171715]">
      <div className="mx-auto flex min-h-screen max-w-[1536px]">
        <aside className="hidden w-[248px] shrink-0 flex-col border-r border-[#e7e7e3] bg-[#fbfbfa] px-4 py-5 lg:flex">
          <div className="mb-10 flex items-center gap-2 px-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles size={15} />
            </div>
            <span className="text-[15px] font-semibold tracking-[-0.03em]">RepeTutor</span>
          </div>

          <nav className="space-y-1 text-sm">
            <a className="flex h-9 items-center gap-3 rounded-lg bg-[#ececeb] px-3 font-medium" href="#create">
              <WandSparkles size={16} /> Створити роботу
            </a>
            <a className="flex h-9 items-center gap-3 rounded-lg px-3 text-[#676762] transition hover:bg-[#f0f0ee]" href="#library">
              <FolderOpen size={16} /> Моя бібліотека
            </a>
          </nav>

          <div className="mt-8 px-3 text-[11px] font-medium uppercase tracking-[0.08em] text-[#989893]">Нещодавні</div>
          <div className="mt-2 space-y-1 text-[13px] text-[#5e5e59]">
            {recentHomework.map((title) => (
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left hover:bg-[#f0f0ee]" key={title} type="button">
                <FileText size={14} /> {title}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-1 border-t border-[#e7e7e3] pt-4 text-sm text-[#676762]">
            <button className="flex h-9 w-full items-center gap-3 rounded-lg px-3 hover:bg-[#f0f0ee]" type="button"><CircleHelp size={16} /> Допомога</button>
            <button className="flex h-9 w-full items-center gap-3 rounded-lg px-3 hover:bg-[#f0f0ee]" type="button"><Settings size={16} /> Налаштування</button>
            <div className="mt-3 flex items-center gap-2 px-3 pt-3">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#deded8] text-xs font-semibold">ІБ</div>
              <span className="text-[13px] font-medium text-[#373733]">Іван Бойко</span>
              <MoreHorizontal className="ml-auto" size={16} />
            </div>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b border-[#e7e7e3] bg-[#fbfbfa] px-5 sm:px-8">
            <div className="flex items-center gap-2 lg:hidden">
              <div className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Sparkles size={15} /></div>
              <span className="font-semibold">RepeTutor</span>
            </div>
            <p className="hidden text-sm text-[#777772] lg:block">Головна <span className="mx-2 text-[#c5c5c1]">/</span> Нова домашня робота</p>
            <button className="flex items-center gap-2 text-sm font-medium text-[#555550] hover:text-black" type="button">
              <div className="flex size-6 items-center justify-center rounded-full bg-[#deded8] text-[10px] font-semibold text-[#333] lg:hidden">ІБ</div>
              <span className="hidden sm:inline">Іван Бойко</span>
              <ChevronDown size={15} />
            </button>
          </header>
          {children}
        </section>
      </div>
    </main>
  );
}
