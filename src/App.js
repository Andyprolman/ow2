import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
		constructor(props){
			super(props)
			this.state = {}

			this.blueButton = this.blueButton.bind(this);
		}

		blueButton(){
			alert('You clicked the blue button!')
		}

	render(){
		return (
			<div className="container App">
					<h1>Welcome to Our World Too!  oskdlfl ksfjdk eo eo g refgh pe fdf dlsf ds jfoj eof oer jdsaj doa sjl bnd adkh</h1>
					<button type="button" class="btn btn-primary" onClick={this.blueButton}>Primary</button>

			</div>
		);
	}
}

export default App;
