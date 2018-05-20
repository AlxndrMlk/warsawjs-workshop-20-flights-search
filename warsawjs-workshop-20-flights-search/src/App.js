import React from 'react';
import SearchView from './SearchView';
import FlightsView from './FlightsView';



class App extends React.Component {
  state = {
    flightData: {},
    view: 'search'
}

  onSearchSubmit = (flightData) => {
    console.log('mirek', flightData)
    this.setState({
      flightData: flightData,        // ES6: flightData
      view: 'flights'
})
}

  render() {
    return (
      <div>
        {
         this.state.view === 'search' ? (<SearchView onAppSubmit={this.onSearchSubmit} />) : (<FlightsView flightData={ this.state.flightData }/>)
        }
      </div>
    );
  }
}

export default App;
