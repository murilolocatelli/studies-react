export const clickReducer = (state = { msg: '' }, action) => {
    switch(action.type) {
        case 'CLICK_HELLO':
            return {...state, msg: action.msg};
        default:
            return state;
    }
}
