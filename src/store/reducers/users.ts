
import { type UserAction, type UserState, UserActionTypes } from "../../types/store"
import usersData from "../../data/users";

const initialState: UserState = {
    users: usersData
}

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.ADD_USER: {
            const updatedUsers = [...state.users, action.payload]

            return { users: updatedUsers }
        }
        case UserActionTypes.UPDATE_USER: {
            const updatedUser = action.payload;
            const editableUserIndex = state.users.findIndex(
                (user) => user.id === updatedUser.id
            );
            const updatedUsers = [...state.users];
            updatedUsers[editableUserIndex] = updatedUser;

            return { users: updatedUsers }
        }
        case UserActionTypes.DELETE_USERS: {
            const deleteUserIds = action.payload;
            const updatedUsers = state.users.filter((user) => !deleteUserIds.includes(user.id));

            return { users: updatedUsers }
        }
        default:
            return state
    }
}

export { userReducer };