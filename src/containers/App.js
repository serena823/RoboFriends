import React ,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from '../components/robot';
import './App.css';
import Scroll from '../components/Scroll'

 

class App extends Component{
	constructor(){
		super()
		this.state={
			    robots:[],
	        searchfield: ''
		}
		 
	}


    componentDidMount(){
    	 fetch('https://jsonplaceholder.typicode.com/users')
    	.then(response=>{return response.json()})
    	.then(users=>{this.setState({robots:users})})
    	
    }

	onSearchChange = (event)=>{
		this.setState({searchfield:event.target.vaule})
	}


	render(){
		const{robots,searchfield}=this.state;
		const filteredRobots= robots.filter(robot=>{
			// console.log(robots.name.toLowerCase())
			// console.log(this.state.searchfield.toLowerCase())
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ?
		 <h1>Loading</h1>:
		 (

			<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
	        <CardList robots={filteredRobots}/>
	        </Scroll>
	        </div>

		);
		}
	}

export default App;
