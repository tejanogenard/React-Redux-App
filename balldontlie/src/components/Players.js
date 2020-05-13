import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import  { fetchPlayers }  from '../actions/playersAction'

const Players = props => {

useEffect(() => {
    props.fetchPlayers()
},[])


    return (
        <div>
            <h1>
                Welcome to the NBA! <span role="img" aria-label="basketball">🏀</span>
            </h1>
        </div>
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