import axios from 'axios'

export const fetchPlayers = () => {
    return dispatch => {
        dispatch({ type: "FETCH_PLAYER_START"})
        axios
            .get()
    }
}