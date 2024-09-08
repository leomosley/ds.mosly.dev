"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useStackState } from "@/hooks/useStackState";
import { useState } from "react";
import { toast } from "sonner";

export function Visualisation() {
  const { stackContents, push, pop, clear, isFull, isEmpty, size, maxSize } = useStackState<number>(5);
  const [count, setCount] = useState<number>(1);

  const handlePop = () => {
    try {
      pop();
      setCount(prev => prev - 1);
    } catch (error) {
      toast.warning(String(error));
    }
  }

  const handlePush = () => {
    try {
      push(count);
      setCount(prev => prev + 1);
    } catch (error) {
      toast.warning(String(error));
    }
  }

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
            {maxSize - size <= index && stackContents[(maxSize - 1) - index]}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button onClick={handlePush}>Push</Button>
        <Button onClick={handlePop}>Pop</Button>
      </div>
    </div >
  );
}
