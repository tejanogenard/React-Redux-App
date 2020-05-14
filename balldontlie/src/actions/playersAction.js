import axios from 'axios'


export const FETCH_PLAYER_START = "FETCH_PLAYER_START"
export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS"
export const FETCH_PLAYER_FAILED = "FETCH_PLAYER_FAILED"

export const fetchPlayers = () => {
    return dispatch => {
        dispatch({ type: FETCH_PLAYER_START})
        axios
            .get('https://www.balldontlie.io/api/v1/players')
            .then(res => {
                console.log(res.data.data)
                dispatch({ type: FETCH_PLAYER_SUCCESS, payload: res.data.data})
            })
            .catch(err => dispatch({ type: FETCH_PLAYER_FAILED, payload: err}))
    }
}