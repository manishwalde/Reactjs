import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  //   constructor(props) {
  //     super(props);
  //     this.onSearchSubmit = this.onSearchSubmit.bind(this);
  //   }

  // MEDTHOD 2 TO GET RESPONSE BY ADDING "async" and "await" KEYWORDS
  onSearchSubmit = async term => {
    // CALLING API USING AXIOS
    // Axios.get('ADDRESS',{OBJECT});
    const response = await unsplash.get("/search/photos/", {
      params: { query: term }
    });
    // METHOD 1 TO GET RESPONSE USING .THEN KEYWORD
    // .then(response => console.log(response.data.results));
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
