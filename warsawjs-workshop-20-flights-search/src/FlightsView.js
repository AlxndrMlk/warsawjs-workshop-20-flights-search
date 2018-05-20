import React from 'react';
import Flight from './Flight'

class FlightsView extends React.Component {
    async componentDidMount() {
      const { departValue, returnValue, fromValue, toValue } = this.props.flightData;
      const url = `https://warsawjs-flights-api.herokuapp.com/flights/${departValue}/${returnValue}/${fromValue}/${toValue}`
      const flights = await fetch(url)
        .then((res) => res.json()); // Fetch API in every browser

      this.setState({
        flights
      })
}

   state = {
     flights: []
   }
    render() {
      const flightsMapped = this.state.flights.map( flight => (<Flight key={flight.id} flight={flight}/>))

      return (
        <div>
          { flightsMapped }
        </div>
             )
    }
}

export default FlightsView;
