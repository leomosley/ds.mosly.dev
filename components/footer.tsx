import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="flex justify-between gap-2 py-6 w-full shrink-0 items-center px-4 border-t mt-12 sm:mt-0">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Leo Mosley. All rights reserved.</p>
      <nav className="flex gap-4 items-center">
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
      <ThemeToggle />
    </footer>
  );
}
