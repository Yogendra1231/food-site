import React from "react";

class UserClass extends React.Component{
   
    constructor(props){
        super(props);
        this.state ={
            count: 0,
        }

    }


    render(){
      return(  <div className="user-card"> 
      <h2> {this.props.name}</h2>
      <h3> yog3859@gmail.com</h3>
      </div>
      )
    }
}
export default UserClass;