const githubReducer = (state, action ) =>{
    switch(action.type){
        default:
            case 'GET_USERS':
                return {
                    ...state,
                    users: action.payload,
                    loading: false
                }
            case'SET_LOADING':
            return {
                ...state,
                loading: true
            }
            return state;
    }
}

export default githubReducer;