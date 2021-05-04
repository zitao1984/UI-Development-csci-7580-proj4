import { START_ONBOARDING,COMPLETE_ONBOARDING,LOGIN_SUCCESS, INVALID_LOGIN, LOGIN_NETWORK_ERROR,UPDATE_SAVE, LOGOUT} from "./actionConstants";
import {login,userUpdateSavedJobs,userCompletedOnboarding,userStartOnboarding} from "../data/data";
import store from "./store";
// Action creator functions
export const loginSuccess=user=>({
    type: LOGIN_SUCCESS,
    payload: {
        user:user,
    }
});

export const loginFail = () => ({
    type: INVALID_LOGIN
});

export const loginNetworkError = () => ({
    type: LOGIN_NETWORK_ERROR
});

export const logout = () => ({
    type: LOGOUT
});

export const validateUser = (username, password) => {
    let user = login(username, password);
    if (user.id)
        return loginSuccess(user);
    else return loginFail();
    // No case for a network error yet
}

export const updateSave = (jobID,savedStatus)=> {
    // Gets the current user from the store. Note the store import above.
    const userId = store.getState().user.id;
    const updateSavedJobs = userUpdateSavedJobs(userId, jobID, savedStatus);
    return {
        type: UPDATE_SAVE,
        payload: {
            saved: updateSavedJobs
        }
    }
}

export const completeOnboarding = () => {
    // Gets the current user from the store. Note the store import above.
    const userId = store.getState().user.id;
    userCompletedOnboarding(userId);
    return {
        type: COMPLETE_ONBOARDING
    }
}

export const startOnboarding = () => {
    // Gets the current user from the store. Note the store import above.
    const userId = store.getState().user.id;
    userStartOnboarding(userId);
    return {
        type: START_ONBOARDING
    }
}



