export interface UserState {
    list: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
}

interface FetchUserSuccessError {
    type: UserActionTypes.FETCH_USERS_ERROR
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserSuccessError
