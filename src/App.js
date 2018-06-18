import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor (){
		super()
		this.state = {
			repeat: ''
		}
	}
	rep(e){
		this.setState({
			repeat: e.target.value
		})
	}
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input onChange={this.rep.bind(this)} type="text" placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.repeat}</p>
      </div>
    );
  }
}

export default App;
