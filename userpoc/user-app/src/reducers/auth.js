
const initalState = {
    currentUser: {}
}

export function authreducer(state = initalState, action) {
    let { type } = action;
    switch (type) {
        case "LOGIN_SUCCESS": {
            const { user } = action;
            return { ...state, currentUser: user };
        }
        default:
            return state;
    }
}