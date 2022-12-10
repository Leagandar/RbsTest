import type { Organization } from "../types";

interface OrganizationsData {
  organizations: Organization[];
}

const organizationsData: OrganizationsData = {
  organizations: [
    {
      id: 1,
      fullName: "Tomsk State University",
      shortName: "TSU",
    },
    {
      id: 2,
      fullName: "Lomonosov Moscow State University",
      shortName: "MSU",
    },
    {
      id: 3,
      fullName: 'LLC "Rubius Group"',
      shortName: "Rubius",
    },
  ],
};

export default organizationsData.organizations;
