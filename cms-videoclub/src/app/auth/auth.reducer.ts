import { Action, createReducer, on } from "@ngrx/store";
import * as actions from './auth.actions';
import { UserModel } from "src/app/models/user/user.model";


export interface State {
    user?: UserModel | null
}


export const initializeState: State = {
    user: null
} 

const authReducer = createReducer(initializeState,
    on(actions.setUser, (state, { user }) => ({ ...state, user })),
    on(actions.unSetUser, state => ({ ...state, user: null })),
);



export function _authReducer(state: State | any, action: Action | any) {
    return authReducer(state, action)
}