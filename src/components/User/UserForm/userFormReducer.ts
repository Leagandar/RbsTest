const USER_INFO_CHANGE = "USER_INFO_CHANGE";

interface UserFormType {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    organizationId: string | null;
    email: string;
}

type UserKeys = keyof UserFormType;

type UserAction = {
    type: typeof USER_INFO_CHANGE;
    payload: { key: UserKeys; value: string };
};

const userReducer = (state: UserFormType, action: UserAction) => {
    if (action.type === USER_INFO_CHANGE) {
        const { key, value } = action.payload;
        const updatedUser = { ...state, [key]: value };

        return updatedUser;
    }

    return state;
};

export { type UserKeys, type UserAction, type UserFormType, userReducer, USER_INFO_CHANGE }