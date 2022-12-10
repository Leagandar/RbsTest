import type { UserKeys } from './userFormReducer'

interface UserField {
    id: UserKeys;
    label: string;
}

const userFields: UserField[] = [
    {
        id: "lastName",
        label: "Last name",
    },
    {
        id: "firstName",
        label: "First name",
    },
    {
        id: "middleName",
        label: "Middle name",
    },
    {
        id: "email",
        label: "Email",
    },
];

export { userFields }