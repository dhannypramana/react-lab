import type { ClassValue } from 'clsx';

/**
 * @description Merge and resolve conflicts between Tailwind CSS classes.
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
