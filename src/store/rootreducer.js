import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_USER_DETAILS':
            return {
                ...state,
                members: action.payload
            }
        default: return {
            ...state
        }
    }
}

export default reducer