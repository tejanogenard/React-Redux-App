import React from 'react'

const PlayerCard = props => {
    console.log(props)

    return(
        <div className = "player-card">
        <p>Player: {props.player.first_name} {props.player.last_name}, {props.player.team.full_name}</p>

        </div>
    )
}
export default PlayerCard