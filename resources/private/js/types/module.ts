export type ModulePermission = {
    [key: string]: {
        [permission: string]: boolean;
    };
};
export type RoleDTO = {
    id?: string;
    name: string;
    permissions: ModulePermission;
};

export type UserDTO = {
    id?: string;
    name: string;
    email: string;
    role_id: string;
    password?: string;
    roles: Partial<RoleDTO>[];
};
