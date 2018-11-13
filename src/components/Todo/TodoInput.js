import React, { Component } from 'react'

export default class TodoInput extends Component {

  handleKeyPress = (e) => {
    const value = e.target.value.trim().length > 0;
    if (e.key === 'Enter' && value) {
      this.props.onSubmit({
        title: e.target.value,
        active: false,
      })
      e.target.value = ''
    }
  }
  render() {
    return (
      <div>
        <input id="item" onKeyDown={this.handleKeyPress} />
      </div>
    )
  }
}
