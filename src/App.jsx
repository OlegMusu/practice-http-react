import { Component } from "react";
import { ClipLoader } from "react-spinners";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({isLoading: true})
    setTimeout(() => {
      fetch(
        "https://pixabay.com/api/?key=56382516-64a69418319801ecbd97e992c&q=yellow+flowers&image_type=photo",
      )
        .then((resolfe) => resolfe.json())
        .then((res) => this.setState({ images: res.hits })).finally(() => this.setState({isLoading: false}));
    }, 2500);
  }

  render() {
    return (
      <>
        {this.state.isLoading && <ClipLoader color="red"/>}
        {this.state.images.length > 0 && (
          <ul>
            {this.state.images.map((images) => {
              return (
                <li key={images.id}>
                  <img src={images.largeImageURL} alt={images.tags} />
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default App;
