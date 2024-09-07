import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { ArrowRight, BarChart2, GitGraph, ListOrdered, Menu, Share2 } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Visualize Data Structures with Ease
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore and understand complex data structures through interactive visualisations.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Explore Data Structures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <ListOrdered className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-center">Stacks</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Visualize Last-In-First-Out (LIFO) data structures.
                </p>
                <Button variant="outline" className="w-full">
                  Explore Stacks
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <GitGraph className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-center">Queues</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Understand First-In-First-Out (FIFO) operations.
                </p>
                <Button variant="outline" className="w-full">
                  Explore Queues
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <Share2 className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-bold text-center">Graphs</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Visualize complex relationships and networks.
                </p>
                <Button variant="outline" className="w-full">
                  Explore Graphs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get notified about new features and improvements. Join our newsletter today.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}