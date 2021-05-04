import {createStore} from "redux";
import {INITIAL_STATE, LOGIN_STATE} from "./stateConstants";
import { UPDATE_SAVE, LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR, COMPLETE_ONBOARDING, LOGOUT, START_ONBOARDING} from "./actionConstants";

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginState: LOGIN_STATE.LOGGED_IN,
                user: action.payload.user
            }
        case INVALID_LOGIN:
            return {...state, loginState: LOGIN_STATE.INVALID_LOGIN}
        case LOGIN_NETWORK_ERROR:
            return {...state, loginState: LOGIN_STATE.NETWORK_ERROR}
        case LOGOUT:
            return INITIAL_STATE;
        case UPDATE_SAVE:
            return {
                ...state,
                saved: action.payload.saved
            }
        case COMPLETE_ONBOARDING:
            return {
                ...state,
                user: {
                    ...state.user,
                    onboardingComplete: true
                }
            }
        case START_ONBOARDING:
            return {
                ...state,
                user: {
                    ...state.user,
                    onboardingComplete: false
                }
            }
        default:
            return state;
    }
}

export default createStore(rootReducer);