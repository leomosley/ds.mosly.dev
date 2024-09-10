"use client";

import { useVisibleSections } from "@/hooks/useVisibleSections";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const ignore = ['header'];
  const sections = useVisibleSections(ignore);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="border-r p-4 bg-muted/20 top-0 sm:min-w-[200px] hidden sm:flex items-start">
      <div className="sticky top-2">
        <h1 className="text-base/relaxed font-medium leading-snug">Contents</h1>
        <div className="flex flex-col gap-1 transition">
          {mounted ? sections.map((section) => (
            <a
              key={section.id}
              className={cn(
                "text-sm/relaxed leading-snug",
                section.isVisible ? "font-medium" : "font-normal"
              )}
              href={`#${section.id}`}
            >
              {section.id}
            </a>
          )) : [...Array(4)].map((_, index) => (
            <Skeleton key={index} className="h-4 w-28 rounded-full mb-1" />
          ))}
        </div>
      </div>
    </aside>
  );
}