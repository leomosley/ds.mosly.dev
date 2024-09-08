import { dataStructures } from "@/app/page";
import NavCard from "@/components/nav-card";

export default function Page() {
  return (
    <div className="space-y-4 mt-8 mx-auto">
      {dataStructures.map((ds, i) => <NavCard key={i} {...ds} />)}
    </div>
  );
}
