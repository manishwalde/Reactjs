import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //     console.log(event.target.value);
  // }

  state = { term: "" };

  onFormSubmit = event => {
    //   PREVENTS DEFAULT FORM SUBMIT
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" onChange={(this.onInputChange)}></input> */}
            {/* ABOVE LINE (WITH FUNCTION CALL) IS SIMILAR TO BELOW LINE */}

            {/* UNCONTROLLED ELEMENT */}
            {/* <input type="text" onChange={(e) => console.log(e.target.value)}></input> */}

            {/* CONTROLLED ELEMENT */}
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
