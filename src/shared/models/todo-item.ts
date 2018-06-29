export interface TodoItem {
    id: number;
    title: string;
    note: string;
    createdAt ?: string
    done ?: boolean;
}
