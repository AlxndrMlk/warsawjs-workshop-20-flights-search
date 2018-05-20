import React from 'react';
import Flight from './Flight'
import FlightFilters from './FlightFilters'

class FlightsView extends React.Component {
    async componentDidMount() {
      this.setState({
        flightsFetching: true,
      })
      const { departValue, returnValue, fromValue, toValue } = this.props.flightData;
      const url = `https://warsawjs-flights-api.herokuapp.com/flights/${departValue}/${returnValue}/${fromValue}/${toValue}`
      const flights = await fetch(url)
        .then((res) => res.json()); // Fetch API in every browser

      this.setState({
        flights,
        flightsFetching: false,
      })
}
  changeFilterValues = (values) => {
// console.log(values);
    this.setState(values);
  }

   state = {
     flights: [],
     priceMax: 7000,
     flightsFetching: false
   }
    render() {

      const flightsMapped = this.state.flights
        .filter( flight =>
            !this.state.priceToggled || flight.price <= +this.state.priceMax)
        .map( flight => (<Flight key={flight.id} flight={flight}/>))

      return (

        <div>
          { this.state.flightsFetching ? <p>Loading...</p> : null }
          <FlightFilters changeFilterValues = {this.changeFilterValues}/>
          { flightsMapped }
        </div>
             )
    }
}

export default FlightsView;
