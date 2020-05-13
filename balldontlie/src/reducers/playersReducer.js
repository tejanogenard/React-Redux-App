const initialState = {
    players: [],
    isFetching: false,
    error:""
}

export const playersReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_PLAYER_START":
            return{
                ...state,
                isFetching:true
            }
        default:
            return state;
    }
}