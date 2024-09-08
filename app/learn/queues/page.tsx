import { Visualisation } from "@/components/queue/visualisation";

export default function Page() {
  return (
    <>
      <section id="header" className="mb-4">
        <h1 className="font-bold text-4xl">Queues</h1>
        <p className="text-base/relaxed text-muted-foreground">A deep dive into the FIFO Data Structure.</p>
      </section>
      <section id="What is a Queue?" className="mb-4">
        <h2 className="font-bold text-2xl">What is a Queue?</h2>
        <p>
          A queue is a linear data structure that follows the First In, First Out (FIFO) principle. This means the first element added is the first one to be removed, just like a real-world line or queue.
        </p>
      </section>
      <section id="Visualisation" className="mb-4">
        <h2 className="font-bold text-2xl">Visualisation</h2>
        <p className="text-base/relaxed text-muted-foreground">Have a play around with this.</p>
        <Visualisation />
      </section>
    </>
  );
}
