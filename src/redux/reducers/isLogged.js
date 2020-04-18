const loggedReducer = (state = true, action) => {
    switch(action.type) {
        case 'LOGGED_ON':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;