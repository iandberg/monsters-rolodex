import React, {Component} from "react"

import CardList from "./components/card-list.component"
import SearchBox from "./components/search-box/search-box.component"
import "./App.css"

class App extends Component{

	constructor(){
		super()

		this.state = {
			monsters : [],
			searchField : ""
		}

		// this.searchHandler = this.searchHandler.bind(this)
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(resp=>(
				resp.json()
			))
			.then(data=>(
				this.setState({monsters: data})
			))
	}

	searchHandler = (e) => {
		this.setState({searchField: e.target.value})
	}

	render(){

		let filteredMonsters = this.state.monsters.filter(mon=>(
			mon.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		))

		return(
			<div>
				<h1 style={{textAlign:"center"}} >Monsters Rolodex</h1>
				<div style={{textAlign:"center"}}>
					<SearchBox changeHandler={this.searchHandler}/>
				</div>
				<CardList monsters={filteredMonsters}/>
			</div>
		)
	}
}
export default App
