import React from 'react'

export default class ClassTest extends React.Component {
  state = {
    property: 'one'
  }

  render() {
    return (<div>{this.state.property}</div>)
  }
}