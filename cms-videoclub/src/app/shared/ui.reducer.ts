import { createReducer, on } from "@ngrx/store";
import * as actions from './ui.actions'; 


export interface State {
    isLoading: boolean;
}

const initializeApp: State = {
    isLoading: false
}

const _uiReducer = createReducer(initializeApp,
    on(actions.isLoading,   (state => ({...state, isLoading: true}))),
    on(actions.stopLoading, (state => ({...state, isLoading: false})))
);



export function uiReducer(state: any, action: any) {
    return _uiReducer(state, action);
}

