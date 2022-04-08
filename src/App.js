import React from "react";
import './App.css'
import { CommonContext } from "./components/CommonContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import UpdateButton from "./components/UpdateButton";

class App extends React.Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
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
        <div className="App">
        <Header/>
        <CommonContext.Consumer>

{
    ({color}) => (
        <h1 style={{ backgroundColor:color }}>This is Easy Example of Context Api</h1>
    )
}
    </CommonContext.Consumer>
        <Main />
        <UpdateButton />
        <Footer/>
        </div>
      </CommonContext.Provider>
    );
  }
}

export default App;
