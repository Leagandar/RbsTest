import organizations from "../data/organizations";

const getOrganizationsPairs = () => {
    const organizationPairs = organizations.map(({ fullName, shortName, id }) => ({
        value: id.toString(),
        name: `${fullName}(${shortName})`,
    }));

    return organizationPairs
}

export { getOrganizationsPairs }