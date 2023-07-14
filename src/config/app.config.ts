interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['HR Manager', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'HR Management',
  addOns: ['chat', 'notifications', 'file'],
};
