export class Endpoint {
    private static _baseUrl: string;
    private static _version: Undefined<string>;
    private static _module: Undefined<string>;

    public static setEndpoint({ baseUrl, module, version }: { version?: string; baseUrl: string; module?: string }) {
        this._version = version;
        this._baseUrl = baseUrl;
        this._module = module;
    }

    public static extractPath(path: string, values?: Record<string, string>): string {
        const bracketMatches = path.match(/\[\w*\]/g);

        if (!bracketMatches || !values)
            return path;

        for (const [key, replacement] of Object.entries(values)) {
            const match = bracketMatches.find(item => item.replace(/[[\]]/g, '') === key);
            if (match)
                path = path.replace(match, replacement);
        }

        return path;
    }

    public static getPath(path: string): string {
        const currentPath: string[] = [this._baseUrl, this._version ?? '', this._module ?? '', path];
        return currentPath.filter(item => item).join('/');
    }
}
