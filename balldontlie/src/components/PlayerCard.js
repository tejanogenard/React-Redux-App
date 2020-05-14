import React from 'react'

const PlayerCard = props => {
    return(
        <div className = "player-card">
        <p>{props.player.first_name} {props.player.last_name}, {props.player.team.full_name}</p>
        </div>
    )
}
export default PlayerCard