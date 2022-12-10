import { combineReducers } from 'redux';
import { userReducer } from './users';

const rootReducer = combineReducers({
    user: userReducer,
})

type RootState = ReturnType<typeof rootReducer>

export { rootReducer, type RootState }