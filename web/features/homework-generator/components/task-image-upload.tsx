import Image from "next/image";
import { ImagePlus, X } from "lucide-react";
import type { ChangeEvent, DragEvent } from "react";
import type { TaskImage } from "../types";

type TaskImageUploadProps = {
  images: TaskImage[];
  onImagesAdd: (files: FileList | File[]) => void;
  onImageRemove: (imageId: string) => void;
};

export function TaskImageUpload({ images, onImagesAdd, onImageRemove }: TaskImageUploadProps) {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      onImagesAdd(event.target.files);
      event.target.value = "";
    }
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    onImagesAdd(event.dataTransfer.files);
  }

  return (
    <div className="mt-4">
      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-line-strong bg-surface-hover px-4 py-3 text-sm font-medium text-copy transition hover:border-primary hover:text-app-foreground" onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}>
        <ImagePlus size={16} />
        <span>Завантажити зображення задач</span>
        <span className="hidden text-xs font-normal text-copy-muted sm:inline">або перетягніть сюди</span>
        <input accept="image/png,image/jpeg,image/webp" className="sr-only" multiple onChange={handleInputChange} type="file" />
      </label>
      <p className="mt-2 text-xs text-copy-muted">PNG, JPG або WebP · до 5 зображень</p>

      {images.length > 0 && (
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((image) => (
            <li className="group relative overflow-hidden rounded-lg border border-line bg-surface" key={image.id}>
              <Image alt={`Завантажена задача: ${image.file.name}`} className="h-24 w-full object-cover" height={96} src={image.previewUrl} unoptimized width={144} />
              <span className="block truncate px-2 py-1.5 text-xs text-copy" title={image.file.name}>{image.file.name}</span>
              <button aria-label={`Видалити ${image.file.name}`} className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-md bg-app-foreground/80 text-white opacity-0 transition group-hover:opacity-100 focus:opacity-100" onClick={() => onImageRemove(image.id)} type="button"><X size={14} /></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
