import React, { Component } from 'react'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      onEdit: false,
      title: props.item.title,
    }
  }
  handleDoubleClick = () => {
    this.setState({
      onEdit: !this.state.onEdit,
    })
  }

  handleSubmit = () => {
    console.log('wew')
    this.props.onEdit(this.state.title, this.props.index)
    this.setState({
      onEdit: false,
    })
  }

  handleActive = (e) => {
    this.props.onActive(this.props.index)
  }

  handleDelete = (e) => {
    this.props.onDelete(this.props.index)
  }
  render() {
    const style = this.props.item.active ? { textDecoration: 'line-through' } : null;
    console.log(this.props)
    const onEdit = (
      <input
        value={this.state.title}
        onChange={(e) => this.setState({
          ...this.state,
          title: e.target.value
        })}
        onKeyPress={(e) => {
          e.key === 'Enter' ? this.handleSubmit() : null
        }}
        onBlur={this.handleSubmit}
      />

    );
    const display = (
      <div>
        <span onClick={this.handleActive} className="green-text bold">Done</span> ||
        <span style={style} >
          {this.state.title}
        </span>
        ||
          <span onClick={this.handleDelete} className="red-text bold">hapus</span>
      </div>
    )
    const result = this.state.onEdit ? onEdit : display;
    return (
      <div onDoubleClick={this.handleDoubleClick}>
        {result}
      </div>
    )
  }
}
