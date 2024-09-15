import { NavCard } from "@/components/nav-card";
import { GitGraph, ListOrdered, Share2 } from "lucide-react";

export default function Page() {
  const dataStructures = [
    { title: "Stacks", description: "Visualise Last-In-First-Out (LIFO) data structures.", href: "/learn/stacks", icon: <ListOrdered className="h-12 w-12 text-primary" /> },
    { title: "Queues", description: "Understand First-In-First-Out (FIFO) operations.", href: "/learn/queues", icon: <GitGraph className="h-12 w-12 text-primary" /> },
    { title: "Graphs", description: "Visualise complex relationships and networks.", href: "/learn/graphs", icon: <Share2 className="h-12 w-12 text-primary" /> },
  ];

  return (
    <div className="space-y-4 mt-8 mx-auto">
      {dataStructures.map((ds, i) => <NavCard key={i} {...ds} />)}
    </div>
  );
}
