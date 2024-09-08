import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capatalise(string: string) {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1);
}