import type { User } from "../types";
import type { UserFormType } from '../components/User/UserForm/userFormReducer'
import organizations from "../data/organizations";

const getUserDisplayName = (user: User) => {
  const { firstName, lastName, middleName } = user;
  const name = user.displayName ?? `${firstName} ${lastName} ${middleName}`;

  return name;
};

const getUserOrganizationName = (
  userOrganizationId: User["organizationId"]
) => {
  const organization = organizations.find(
    (org) => org.id === userOrganizationId
  );

  if (!organization) {
    return 'unknown';
  }

  return organization.shortName;
};

const parseUserForm = (userForm: UserFormType): User | null => {
  const { id, firstName, middleName, lastName, email, organizationId } = userForm;
  if (!organizationId) {
    return null;
  }

  const [parsedFirstName, parsedLastName, parsedMiddleName, parsedEmail] = [firstName, lastName, middleName, email].map((field) => field?.trim())

  return {
    id,
    firstName: parsedFirstName,
    lastName: parsedLastName,
    middleName: parsedMiddleName,
    email: parsedEmail,
    organizationId: parseInt(organizationId)
  };
}

const validateTextField = (field: string) => {
  return field.trim().length > 0;
}

const getFormInputsValidity = (userForm: UserFormType) => {
  const { firstName, lastName, email, organizationId } = userForm;
  const [firstNameValid, lastNameValid, emailValid] = [firstName, lastName, email].map(validateTextField)

  return {
    firstName: firstNameValid,
    lastName: lastNameValid,
    email: emailValid,
    organizationId: organizationId ? true : false
  }
}

const getUsersPage = (users: User[], page: number, pageSize: number) => {
  const startIndex = pageSize * page;
  return users.slice(startIndex, startIndex + pageSize);
}

export { getUserDisplayName, getUserOrganizationName, getFormInputsValidity, parseUserForm, getUsersPage };
