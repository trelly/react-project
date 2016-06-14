const initialState = {
    content: ''
};

function article(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ARTICLE':
            return Object.assign({}, state, action.data);
        default:
            return state
    }
}

export default article