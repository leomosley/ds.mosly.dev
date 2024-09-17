import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "relative flex overflow-x-hidden",
      className
    )}>
      <div className="py-12 animate-marquee whitespace-nowrap">
        {children}
      </div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}
