import { Share2, Target } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export function Header() {
  const nav = [
    { href: "/learn", label: "Data Structures", icon: "", target: "" },
    { href: "/contact", label: "Contact", icon: "", target: "_blank" },
  ];
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Share2 className="h-6 w-6" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {nav.map((item, index) => (
          <Link
            key={index}
            className="text-sm font-medium hover:underline underline-offset-4"
            href={item.href}
            target={item.target}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
