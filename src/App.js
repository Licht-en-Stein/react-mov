import React, { Component } from 'react';
import './App.css';
import Material from './components/Material';

class App extends Component {

  state = {
      items: []
    }
  

  componentDidMount() {
    this.dataFetch()
    .then(res => this.setState({items: res.items}))
  }

  dataFetch = async () => {
    const url = 'https://api.themoviedb.org/3/list/1?api_key=be82991b7df616535a306d630f43b7c6&language=en-US';
    try {
      const result = await fetch(url);
      const data = await result.json(); 
      return data   
    }
    catch(error) {
      console.error('Error', error)
    }
}
  render() {
    return (
      <div className="App">
                
         {this.state.items.length > 0 &&
         <Material items={this.state.items}/>
              }
        </div>

    );
  }
}

export default App;
