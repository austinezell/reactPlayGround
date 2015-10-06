import React from "react"

import Posts from "./posts.js"

export default React.createClass({
  getInitialState () {
    return {data: []}
  },
  componentDidMount (){
    let self = this;
    $.getJSON( "/lib/data.json", function( data ) {
      console.log(data);
     self.setState({data: data.posts})
    })
  },
  render (){
    console.log(this.state.data);

    return (
      <div>
        <Posts data={this.state.data}/>
      </div>
    )
  }
})
