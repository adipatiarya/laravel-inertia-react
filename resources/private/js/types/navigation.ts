export type BreadcrumbItem = {
    title: string;
    href?: string;
};
export type PaginatedResponse<T> = {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
};
