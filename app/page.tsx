import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GitGraph, ListOrdered, Share2 } from "lucide-react";
import { NavCard } from "@/components/nav-card";
import { Marquee } from "@/components/ui/marquee";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Home() {
  const dataStructures = [
    { title: "Stacks", description: "Visualise Last-In-First-Out (LIFO) data structures.", href: "/learn/stacks", icon: <ListOrdered className="h-12 w-12 text-primary" /> },
    { title: "Queues", description: "Understand First-In-First-Out (FIFO) operations.", href: "/learn/queues", icon: <GitGraph className="h-12 w-12 text-primary" /> },
    { title: "Graphs", description: "Visualise complex relationships and networks.", href: "/learn/graphs", icon: <Share2 className="h-12 w-12 text-primary" /> },
  ];

  const comingSoon = [
    { title: "Algorithms" },
  ];

  return (
    <main className="flex-1">
      <section className="w-full py-24 md:py-32 lg:py-48">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Visualise Data Structures with Ease
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore and understand complex data structures through interactive visualisations.
              </p>
            </div>
            <Link href="/quick-start">
              <RainbowButton>Get Started</RainbowButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Explore Data Structures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataStructures.map((ds, i) => <NavCard key={i} {...ds} />)}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coming Soon...</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-balance max-w-[650px]">
                Watch out for some of the features coming soon. Or even sign up to be notified when new features are launched.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2" action={async (formData: FormData) => {
                "use server";
                console.log(formData.get("email"));
              }}>
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" name="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
            <Marquee>
              {comingSoon.map((item, index) => (
                <span key={index} className="mx-4">{item.title}</span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </main>
  );
}