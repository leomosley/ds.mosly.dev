import { Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export function Header() {
  const nav = [
    { href: "/learn", label: "Data Structures", icon: "", target: "" },
    { href: "/contact", label: "Contact", icon: "", target: "_blank" },
  ];
  return (
    <header className="px-4 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <Share2 className="h-6 w-6" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {nav.map((item, index) => (
          <Link
            key={index}
            className="text-sm font-medium hover:underline underline-offset-4 mt-0.5"
            href={item.href}
            target={item.target}
          >
            {item.label}
          </Link>
        ))}
        <a
          className="cursor-pointer"
          href="https://github.com/leomosley/ds.mosly.dev"
          target="_blank"
        >
          <Image
            className="h-6 w-6"
            src="/github-mark.svg"
            alt="github"
            height={500}
            width={500}
          />
        </a>
      </nav>
    </header>
  );
}
