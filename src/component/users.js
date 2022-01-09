import logo from './logo.svg';
import './App.css';
import React from 'react';

class Users extends React.Component{

  constructor(){
    super()
    this.state={
      value : 0,
      data : []
    }
    console.log("first run constructor")  //=>not run again
  }

  componentDidMount(){ //first time only run
    // console.log("third Run  componentDidMount")
    // this.setState({
    //   value  : 1})

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({
    data : json
  }))


    
  }

  data(){
    console.log("data" , this.state.data)
    // this.setState({
    //   value : 2
    // })
  }

  render(){ 
    

    return(
      <div>
        <h1>Hello</h1>
        <button onClick={()=>this.data()}>Click</button>
        <hr/>     {this.state.data.map((v1,key)=>{
      //  console.log(v1)
     return(
       <div key={key}>
       <b >user id : {v1.userId}</b>
       <b >title : {v1.title}</b>
       <b >Completed : {v1.completed}</b>
       <hr/>

       </div>
     )

     })
     
     }
      
      </div>
    )
  }
}

export default Users;