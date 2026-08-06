import * as React from "react";

import { cn } from "@/lib/utils";

type SurfaceCardProps = React.ComponentProps<"div"> & {
  elevated?: boolean;
};

function SurfaceCard({ className, elevated = false, ...props }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface",
        elevated && "shadow-[0_1px_2px_rgba(0,0,0,.02)]",
        className,
      )}
      {...props}
    />
  );
}

export { SurfaceCard };
