import React from "react"

import Card from "./card/card.component"
import "./card-list.styles.css"

const CardList = props => {
	const monsterCards = props.monsters.map(monster=>{		
		return <Card key={monster.id} monster={monster}/>
	})

	return(
		<div className="card-list">
				{monsterCards}
		</div>
	)
}

export default CardList
