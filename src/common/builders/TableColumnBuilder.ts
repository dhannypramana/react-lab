export class TableColumnBuilder<T extends object> {
    private columns: TableColumn<T>[] = [];

    setColumn(column: TableColumn<T>): this {
        this.columns.push(column);
        return this;
    }

    setColumnWithCondition(callback: () => boolean, column: TableColumn<T>): this {
        if (callback())
            this.columns.push(column);
        return this;
    }

    resetColumn() {
        this.columns = [];
        return this;
    }

    build() {
        return this.columns;
    }
}
