const githubReducer = (state, action ) =>{
    switch(action.type){
        default:
            case 'GET_USERS':
                return {
                    ...state,
                    users: action.payload,
                    loading: false
                }
            return state;
    }
}

export default githubReducer;