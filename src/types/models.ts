interface Organization {
  id: number;
  fullName: string;
  shortName: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  organizationId: number;
  email: string;
  displayName?: string;
  password?: string;
}

export type { Organization, User };
