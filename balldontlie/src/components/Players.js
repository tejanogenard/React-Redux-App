import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import  { fetchPlayers }  from '../actions/playersAction'

const Players = props => {

useEffect(() => {
    props.fetchPlayers()
},[])

console.log(props.players.players.data, "#####")
    return (
        <>
            <h1>
                Welcome to the NBA! <span role="img" aria-label="basketball">🏀</span>
            </h1>
            <div>
            {props.players.players.map(player => (
                <p>{player.first_name} {player.last_name} {player.team.full_name}</p>)
            )}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isFetching: state.isFetching,
        players: state.players
    }
}

export default connect(
    mapStateToProps,
    {fetchPlayers}
)(Players)