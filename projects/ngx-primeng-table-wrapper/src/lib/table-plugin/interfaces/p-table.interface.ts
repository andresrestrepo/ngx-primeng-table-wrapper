export interface FilterOptions {
    label: string;
    value: string;
}

export interface TableColumnsDef {
    field: string;
    header: string;
    minWidth?: string;
    isFilterable?: boolean;
    filterOptions?: FilterOptions[];
    filterType?: "text" | "numeric" | "date";
    sorting?: boolean;
    transformer?(data: unknown): unknown;
    showAddButton?: boolean;
    minFractionDigits?: number;
    maxFractionDigits?: number;
    isFrozen?: boolean
}
