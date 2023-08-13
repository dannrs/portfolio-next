import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function formatNumber(count: number) {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  } else {
    return count.toString();
  }
}

export const rgbToHex = (r: number, g: number, b: number): string => {
  const componentToHex = (c: number): string => {
    const hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}

export async function fetcher(url: string) {
  return fetch(url).then(r => r.json())
}
