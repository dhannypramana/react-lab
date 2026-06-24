export type SortDirection = ObjectValues<typeof SORT_DIRECTION>;

export type ObjectValues<T> = T[keyof T];
export type ObjectKeys<T> = keyof T;
export type Nullable<T> = T | null;
export type Undefined<T> = T | undefined;
export type SelectOption<T, K> = {
    label: T;
    value: K;
};
