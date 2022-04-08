import React from "react";
import { CommonContext } from "./components/CommonContext";
import Main from "./components/Main";
import UpdateButton from "./components/UpdateButton";

class App extends React.Component {
  constructor() {
    super();
    this.updateColor = () => {
      this.setState({
        color: "red",
      });
    };

    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <h1>Complete and esay example of Context api</h1>
        <Main />
        <UpdateButton />
      </CommonContext.Provider>
    );
  }
}

export default App;
