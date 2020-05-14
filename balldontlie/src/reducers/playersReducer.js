import {FETCH_PLAYER_START, FETCH_PLAYER_SUCCESS, FETCH_PLAYER_FAILED} from '../actions/playersAction'

const initialState = {
    players: [],
    isFetching: false,
    error:""
}

export const playersReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PLAYER_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_PLAYER_SUCCESS:
            return{
                ...state,
                players: action.payload,
                isFetching: false
            }
        case FETCH_PLAYER_FAILED:
            return{
            ...state,
            error:action.payload
            }
        default:
            return state;
    }
}