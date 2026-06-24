import type { ClassValue } from 'clsx';
import type { To } from 'react-router';

export type Breadcrumb = {
    name: string;
    to?: To;
};

export type TableColumn<T extends object> = {
    key: keyof T | '#';
    name: string;
    columnClass?: ClassValue;
    cellClass?: string | ((row: T) => ClassValue);
    sortKey?: string;
    render?: (row: T, index: number) => Node;
};
