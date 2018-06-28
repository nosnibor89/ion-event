export const APPLY_FILTER = '[Profile] Apply Filter';

export class ApplyFilter {
    static readonly type = APPLY_FILTER;
    constructor(public filter: string) { }
}

