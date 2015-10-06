import React from "react"

import Posts from "./posts.js"

export default React.createClass({
  getInitialState () {
    return { posts: [] }
  },
  componentDidMount (){
    fetch("data.json").then( response => {
      response.json().then(data => this.setState({posts: data.posts}));
    })
  },
  render (){
    console.log(this.state.posts);
    return (
      <div>
      <Posts data={this.state.posts}/>

      </div>
    )
  }
})
