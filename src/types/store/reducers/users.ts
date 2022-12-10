import type { User } from "../../index";

enum UserActionTypes {
    ADD_USER = 'ADD_USER',
    UPDATE_USER = 'UPDATE_USER',
    DELETE_USERS = 'DELETE_USERS',
}

interface AddUserAction {
    type: UserActionTypes.ADD_USER,
    payload: User
}

interface UpdateUserAction {
    type: UserActionTypes.UPDATE_USER,
    payload: User
}

interface DeleteUserAction {
    type: UserActionTypes.DELETE_USERS,
    payload: User['id'][]
}

type UserAction = AddUserAction | UpdateUserAction | DeleteUserAction;

interface UserState {
    users: User[]
}

export { type UserState, type UserAction, UserActionTypes }

