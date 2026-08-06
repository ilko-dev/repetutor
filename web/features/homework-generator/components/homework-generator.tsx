"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen } from "lucide-react";
import { EXAMPLE_TASKS, GENERATED_TASKS } from "../data";
import type { Difficulty, TaskCount, TaskImage } from "../types";
import { GeneratorForm } from "./generator-form";
import { HomeworkResult } from "./homework-result";
import { RecentHomework } from "./recent-homework";

export function HomeworkGenerator() {
  const [example, setExample] = useState<string>(EXAMPLE_TASKS[0]);
  const [taskCount, setTaskCount] = useState<TaskCount>(5);
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [images, setImages] = useState<TaskImage[]>([]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const tasks = GENERATED_TASKS.slice(0, taskCount);
  const imageUrlsRef = useRef<string[]>([]);

  useEffect(() => () => {
    imageUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  function addImages(files: FileList | File[]) {
    const imageFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));

    setImages((currentImages) => {
      const filesToAdd = imageFiles.slice(0, Math.max(0, 5 - currentImages.length));
      const newImages = filesToAdd.map((file) => {
        const previewUrl = URL.createObjectURL(file);
        imageUrlsRef.current.push(previewUrl);
        return { id: crypto.randomUUID(), file, previewUrl };
      });

      return [...currentImages, ...newImages];
    });
  }

  function removeImage(imageId: string) {
    setImages((currentImages) => {
      const image = currentImages.find((item) => item.id === imageId);

      if (image) {
        URL.revokeObjectURL(image.previewUrl);
        imageUrlsRef.current = imageUrlsRef.current.filter((url) => url !== image.previewUrl);
      }

      return currentImages.filter((item) => item.id !== imageId);
    });
  }

  function generateHomework() {
    setIsGenerated(true);
    setCopied(false);
  }

  async function copyHomework() {
    try {
      await navigator.clipboard.writeText(tasks.map((task) => task.text).join("\n"));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[1160px] px-5 py-9 sm:px-8 sm:py-12" id="create">
      <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#777772]"></div>
          <h1 className="text-3xl font-semibold tracking-[-0.045em] sm:text-[34px]">Створіть домашню роботу</h1>
          <p className="mt-2 max-w-xl text-[15px] leading-6 text-[#74746f]">Додайте приклад - RepeTutor підготує схожі завдання за кілька секунд.</p>
        </div>
        <button className="flex h-9 items-center justify-center gap-2 rounded-lg border border-[#deded9] bg-white px-3 text-sm font-medium shadow-[0_1px_1px_rgba(0,0,0,.02)] hover:bg-[#fafafa]" type="button"><BookOpen size={15} /> Як це працює?</button>
      </div>

      <GeneratorForm difficulty={difficulty} example={example} images={images} onDifficultyChange={setDifficulty} onExampleChange={setExample} onGenerate={generateHomework} onImageRemove={removeImage} onImagesAdd={addImages} onTaskCountChange={setTaskCount} taskCount={taskCount} />

      <section className="mt-8" id="library">
        {isGenerated ? <HomeworkResult copied={copied} onCopy={copyHomework} tasks={tasks} /> : <RecentHomework />}
      </section>
    </div>
  );
}
