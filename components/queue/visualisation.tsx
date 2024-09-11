"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useQueueState } from "@/hooks/useQueueState";
import { useState } from "react";
import { toast } from "sonner";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Visualisation() {
  const { queueContents, dequeue, enqueue, size, maxSize } = useQueueState<number>(5);
  const [count, setCount] = useState<number>(1);

  const handleDequeue = () => {
    try {
      dequeue();
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
              "relative flex w-[70px] h-[180px] bg-muted/50 rounded-lg justify-center items-center",
              size > index
                ? "bg-green-100 shadow-sm"
                : "shadow-inner"
            )}
          >
            {((size) === index && (size > 0)) && (
              <div className="flex absolute -top-8">
                <div className="flex items-center text-base/relaxed font-medium">
                  <ChevronDown className="h-5 w-5" />
                  Tail
                </div>
              </div>
            )}
            {(index === 0) && (
              <div className="flex absolute -top-8">
                <div className="flex items-center text-base/relaxed font-medium">
                  <ChevronDown className="h-5 w-5" />
                  Head
                </div>
              </div>
            )}
            {index === 0 && !size && (
              <div className="flex absolute -bottom-8">
                <div className="flex items-center text-base/relaxed font-medium">
                  <ChevronUp className="h-5 w-5" />
                  Tail
                </div>
              </div>
            )}
            <span className="font-bold text-xl text-primary dark:text-background">
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
