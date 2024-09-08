"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useQueueState } from "@/hooks/useQueueState";

export function Visualisation() {
  const { queueContents, dequeue, enqueue, clear, isFull, isEmpty, size, maxSize } = useQueueState<number>(5);

  return (
    <div className="flex flex-col items-center mt-12 gap-4">
      <div className="flex flex-col gap-2">
        {[...Array(maxSize)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-[200px] h-[70px] bg-muted/50 rounded-lg",
              (maxSize - size) <= index
                ? "bg-green-100 shadow-sm"
                : "shadow-inner"
            )}
          >
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => enqueue(10)}>Enqueue</Button>
        <Button onClick={() => dequeue()}>Dequeue</Button>
      </div>
    </div>
  );
}
