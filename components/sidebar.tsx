"use client";

export function Sidebar() {
  return (
    <aside className="border-r p-4 bg-muted/20 top-0 sm:min-w-[200px] hidden sm:flex flex-grow items-start">
      <div className="sticky top-2">
        <h1>Contents</h1>
      </div>
    </aside>
  );
}
