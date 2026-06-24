export class BreadcrumbBuilder {
    private breadcrumbs: Array<Breadcrumb> = [];

    setBreadcrumb({ name, to }: Breadcrumb) {
        this.breadcrumbs.push({ name, to });
        return this;
    }

    setBreadcrumbWithCondition(callback: () => boolean, { name, to }: Breadcrumb): this {
        if (callback())
            this.breadcrumbs.push({ name, to });
        return this;
    }

    resetBreadcrumbs(): this {
        this.breadcrumbs = [];
        return this;
    }

    build() {
        return this.breadcrumbs;
    }
}
