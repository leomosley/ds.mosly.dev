import { Sidebar } from "@/components/sidebar";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex gap-2 h-screen items-start">
      <Sidebar />
      <article className="flex flex-col flex-grow p-4">
        {children}
      </article>
    </main>
  );
}