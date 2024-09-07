import { dataStructures } from "@/app/page";
import NavCard from "@/components/nav-card";

export default function Page() {
  return (
    <main className="flex justify-center min-h-screen p-4">
      <div className="flex flex-col gap-4 mt-8">
        {dataStructures.map((ds, i) => <NavCard key={i} {...ds} />)}
      </div>
    </main>
  );
}
