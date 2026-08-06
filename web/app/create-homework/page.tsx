import { AppShell } from "@/components/layout/app-shell";
import { HomeworkGenerator } from "@/features/homework-generator/components/homework-generator";

export default function CreateHomeworkPage() {
  return (
    <AppShell>
      <HomeworkGenerator />
    </AppShell>
  );
}
