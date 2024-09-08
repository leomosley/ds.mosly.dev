import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const dataPuns = [
  "Looks like this page is stuck in an infinite loop!",
  "404: Node not found in this binary tree.",
  "This page has been popped off the stack.",
  "Queue the disappointment, this page doesn't exist.",
  "We've searched every linked list, but this page is missing.",
  "This route has been garbage collected.",
  "Heap's of apologies, we can't find that page.",
  "Graph theory couldn't plot a path to this page.",
  "This page is out of array bounds.",
  "Seems like this hash doesn't map to any content."
];

export default function NotFound() {
  const randomPun = dataPuns[Math.floor(Math.random() * dataPuns.length)];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl/relaxed text-muted-foreground mb-8 text-center">{randomPun}</p>
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-lg border">
        <p className="text-card-foreground mb-6 text-center">
          {"Don't worry, even the best algorithms sometimes fail to find what they're looking for. Let's get you back to a known node in our application tree."}
        </p>
        <Link href="/" passHref>
          <Button className="w-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}