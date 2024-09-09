import { LearnHeader } from "@/components/learn-header";
import { Sidebar } from "@/components/sidebar";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-2 min-h-screen h-full">
      <Sidebar />
      <article className="flex flex-col flex-grow p-4">
        <LearnHeader />
        {children}
      </article>
    </main>
  );
}