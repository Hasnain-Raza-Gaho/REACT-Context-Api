import React, { Component } from 'react';
export class App extends Component {

  constructor(){
    super();
    this.state ={
      count : 0
    }
    console.log( 'consutructor run',this.state.count)
  }
  
  // getdata  (){
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }

  componentDidMount(){
    console.log('componnetdidmount');
  }
  render() {
    


    console.log('render run')
    return (
      <div>
        <h1>life cycle methods..</h1>
        <p>{this.state.count}</p>
        <button >click</button>
        {/* <button onClick={()=>this.getdata()}>click</button> */}

      </div>
    )
  }
}

export default App