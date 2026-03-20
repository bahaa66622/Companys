import { Role } from "@prisma/client";

export const routeRoleMap: Record<string, Role[]> = {
  "/dashboard/manager": [Role.COMPANY_MANAGER, Role.SUPER_ADMIN],
  "/dashboard/head": [Role.DEPARTMENT_HEAD],
  "/dashboard/employee": [Role.EMPLOYEE],
  "/auth/register": [Role.SUPER_ADMIN]
};

export const canManageCompany = (role: Role) => [Role.SUPER_ADMIN, Role.COMPANY_MANAGER].includes(role);

export const canManageDepartment = (role: Role) =>
  [Role.SUPER_ADMIN, Role.COMPANY_MANAGER, Role.DEPARTMENT_HEAD].includes(role);
