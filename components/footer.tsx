import { ThemeToggle } from '@/components/theme-toggle';

export function Footer() {
  return (
    <footer className="flex justify-between gap-2 py-6 w-full shrink-0 items-center px-4 border-t mt-12 sm:mt-0">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Leo Mosley. All rights reserved.</p>
      <ThemeToggle />
    </footer>
  );
}
