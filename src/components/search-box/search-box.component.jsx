import React from "react"

import "./search-box.styles.css"

const SearchBox = props =>{
	return (
		<input className="search" type="search" placeholder="Search Monsters" onChange={props.changeHandler}/>
	)
}

export default SearchBox
