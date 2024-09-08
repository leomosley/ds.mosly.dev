import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Leo Mosley. All rights reserved.</p>
      <nav className="flex gap-4 sm:gap-6 items-center">
        <Link className="text-xs hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
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
        <Link className="text-xs hover:underline underline-offset-4" href="/about">
          About
        </Link>
      </nav>
      <ThemeToggle />
    </footer>
  );
}
