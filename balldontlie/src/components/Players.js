import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import  { fetchPlayers }  from '../actions/playersAction'
import PlayerCard from "./PlayerCard"

const Players = props => {

useEffect(() => {
    props.fetchPlayers()
},[])

    return (
        <>
            <h1>
                Welcome to the NBA! <span role="img" aria-label="basketball">🏀</span>
            </h1>
            <div>
            {props.players.players.map(player => (
                    <PlayerCard player={player} />
                ))}
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