

const globalReducer = (state, action) => {
    const actions = {
        'auth': { ...state, auth: action.payload },
        'user': { ...state, user: action.payload },
    }

    return action.type
        ? actions[action.type]
        : state;
}


export default globalReducer