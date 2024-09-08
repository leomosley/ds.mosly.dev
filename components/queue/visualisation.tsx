"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useQueueState } from "@/hooks/useQueueState";
import { useState } from "react";
import { toast } from "sonner";

export function Visualisation() {
  const { queueContents, dequeue, enqueue, size, maxSize } = useQueueState<number>(5);
  const [count, setCount] = useState<number>(1);

  const handleDequeue = () => {
    try {
      dequeue();
      setCount(prev => prev - 1);
    } catch (error) {
      toast.warning(String(error));
    }
  }

  const handleEnequeue = () => {
    try {
      enqueue(count);
      setCount(prev => prev + 1);
    } catch (error) {
      toast.warning(String(error));
    }
  }

  return (
    <div className="flex flex-col items-center mt-12 gap-4">
      <div className="flex  gap-2">
        {[...Array(maxSize)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "flex w-[70px] h-[180px] bg-muted/50 rounded-lg justify-center items-center",
              size > index
                ? "bg-green-100 shadow-sm"
                : "shadow-inner"
            )}
          >
            <span className="font-bold text-xl">
              {size > index && queueContents[index]}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button onClick={handleEnequeue}>Enqueue</Button>
        <Button onClick={handleDequeue}>Dequeue</Button>
      </div>
    </div>
  );
}
