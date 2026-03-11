import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border border-[color:var(--line)] bg-white transition duration-300 hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}
