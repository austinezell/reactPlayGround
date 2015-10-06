import React from "react"

import Posts from "./post.js"

export default React.createClass({
  render() {
    let content = this.props.data.map( data =>{
      return (
        <div>
        <h1>{data.title}</h1>
        <h4>{data.body}</h4>
        <span>{data.date}</span>
        </div>
      )
    })
    return (
      <div>
      {content}
      </div>
    )
  }
})
