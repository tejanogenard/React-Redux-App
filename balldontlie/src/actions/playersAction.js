import axios from 'axios'

export const fetchPlayers = () => {
    return dispatch => {
        dispatch({ type: "FETCH_PLAYER_START"})
        axios
            .get('https://www.balldontlie.io/api/v1/players')
            .then(res => {
                console.log(res)
                dispatch({ type: "FETCH_PLAYER_SUCCESS", payload: res.data})
            })
            .catch(err => console.log(err))
    }
}