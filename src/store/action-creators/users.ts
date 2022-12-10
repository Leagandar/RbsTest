import { User } from "../../types"
import { UserActionTypes, UserAction } from "../../types/store"

const addUser = (payload: User): UserAction =>
({
    type: UserActionTypes.ADD_USER,
    payload
})

const updateUser = (payload: User): UserAction =>
({
    type: UserActionTypes.UPDATE_USER,
    payload
})

const deleteUsers = (payload: User['id'][]): UserAction =>
({
    type: UserActionTypes.DELETE_USERS,
    payload
})

export { addUser, updateUser, deleteUsers }