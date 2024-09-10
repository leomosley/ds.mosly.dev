import { Visualisation } from "@/components/stack/visualisation";

export default function Page() {
  return (
    <>
      <section id="header" className="">
        <h1 className="font-bold text-4xl">Stacks</h1>
        <p className="text-base/relaxed text-muted-foreground">A deep dive into the LIFO Data Structure.</p>
      </section>
      <section id="What is a Stack?" className="mt-4">
        <h2 className="font-bold text-2xl">What is a Stack?</h2>
        <p>
          {"A stack is a fundamental data structure in computer science where the last item added is the first to be removed, commonly referred to as LIFO. Let's explore how it works and where it's used!"}
        </p>
      </section>
      <section id="Visualisation" className="mt-4">
        <h2 className="font-bold text-2xl">Visualisation</h2>
        <p className="text-base/relaxed text-muted-foreground">Have a play around with this.</p>
        <Visualisation />
      </section>
    </>
  );
}
