import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type options = {
  title: string;
  description: string;
  type: "goal" | "level" | "focus";
}

export default function Page() {
  const goals: options[] = [
    { title: "Deepen your knowledge", description: "You already have some knowledge on data structures but want to learn more.", type: "goal" },
    { title: "Refresh the basics", description: "You know your stuff but need a quick refresh of the basics.", type: "goal" },
    { title: "Start from the beginning", description: "Your knew to this topic and want to start from the very beginning.", type: "goal" },
  ];

  return (
    <main className="flex flex-col md:max-w-4xl mx-auto min-h-screen">
      <Label className="text-2xl mt-12 mb-1 font-semibold">What{"'"}s your goal?</Label>
      <section className="flex gap-2">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="cursor-pointer"
          >
            <Card
              className="w-64 p-3 text-pretty"
            >
              <Label className="text-md">{goal.title}</Label>
              <br />
              <span className="text-sm/relaxed font-normal">{goal.description}</span>
            </Card>
          </div>
        ))}
      </section>
    </main>
  );
}
