export type PrivilegeRequirement = ReadonlyArray<string>;
export type PrivilegeMenu = {
    icon: string;
    key: string;
    name: string;
    path: string;
    privileges?: PrivilegeRequirement;
};

export type PrivilegeGroupMenu = {
    icon?: string;
    children: PrivilegeMenu[];
    key: string;
    name: string;
    privileges?: PrivilegeRequirement;
    path?: string;
};
