import React from 'react';

class SearchView extends React.Component {
  state = {                                   // This has to be called STATE!!!!
    fromValue: "WAW",
    toValue: "ATL",
    departValue: "2018-09-09",
    returnValue: "2018-09-12"
}

  onFromChange = (e) => {             // arroe func hasn;t have its own this -> use global class this
    console.log(e.target.value)
    this.setState({
        fromValue: e.target.value
});
}

  onToChange = (e) => {             // arroe func hasn;t have its own this -> use global class this
    console.log(e.target.value)
    this.setState({
      toValue: e.target.value
});
}

  onDepartChange = (e) => {             // arroe func hasn;t have its own this -> use global class this
    console.log(e.target.value)
    this.setState({
      departValue: e.target.value
  });
  }

  onReturnChange = (e) => {             // arroe func hasn;t have its own this -> use global class this
    console.log(e.target.value)
    this.setState({
      returnValue: e.target.value
  });
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.fromValue === "") {
      alert('At least one value is empty');
      return;
    }
    if (this.state.toValue === "") {
      alert('At least one value is empty');
      return;
    }
    if (this.state.departValue === "") {
      alert('At least one value is empty');
      return;
    }
    if (this.state.returnValue === "") {
      alert('At least one value is empty');
      return;
    }
    this.props.onAppSubmit({...this.state});    // '...' = REST OPERATOR - a copy of an object
  }



  render() {
    return (<form onSubmit={this.onSubmit}>
       <label>
       <strong>From</strong>
       <select value = {this.state.fromValue} onChange = {this.onFromChange}>
         <option value="ATL">ATL</option>
         <option value="WAW">WAW</option>
       </select>
       </label>

       <label>
       <strong>To</strong>
       <select value = {this.state.toValue} onChange = {this.onToChange}>
         <option value="ATL">ATL</option>
         <option value="WAW">WAW</option>
       </select>
       </label>

       <label>
         <strong>Depart</strong>
         <input type='date' value = {this.state.departValue} onChange = {this.onDepartChange} />
       </label>

       <label>
         <strong>Return</strong>
         <input type='date' value = {this.state.returnValue} onChange = {this.onReturnChange} />
       </label>

       <input type='submit' value="Jedziesz!" />

    </form>);
  }
}

export default SearchView;
