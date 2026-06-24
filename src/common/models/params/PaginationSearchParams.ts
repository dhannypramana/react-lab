export class PaginationSearchParam {
    sortBy!: Undefined<string>;
    direction!: Undefined<SortDirection>;
    page!: number;
    limit!: number;

    constructor() {
        Object.assign(this, {
            page: 0,
            limit: 10,
        });
    }

    setSortBy(value: Undefined<string>): this {
        this.sortBy = value;
        return this;
    }

    setDirection(value: Undefined<SortDirection>): this {
        this.direction = value;
        return this;
    }

    setPage(value: number): this {
        this.page = value;
        return this;
    }

    setFirstPage(): this {
        this.page = 1;
        return this;
    }

    setLimit(limit: number): this {
        this.limit = limit;
        return this;
    }
}
