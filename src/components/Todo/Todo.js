import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoStatus from './TodoStatus'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    title: 'Wash dishes',
                    active: false,
                },
                {
                    title: 'Cook a Meal',
                    active: false,
                }
            ],
            show: 'all'
        }
    }

    computedItems() {
        if (this.state.show === 'all') return this.state.items
        else if (this.state.show === 'active') {
            return this.state.items.filter(item => !item.active)
        } else if (this.state.show === 'completed') {
            return this.state.items.filter(item => item.active)
        }
    }

    handleSubmit = (items) => {
        console.log(items)
        this.setState({
            ...this.state,
            items: [...this.state.items, items]
        })
    }

    handleDelete = (index) => {
        const items = [...this.state.items]
        items.splice(index, 1)
        this.setState({
            ...this.state,
            items
        })
    }

    handleActive = (index) => {

        const items = [...this.state.items]
        items[index].active = !items[index].active;
        console.log(items)
        this.setState({
            ...this.state,
            items
        })
    }
    handleEdit = (title, index) => {
        const items = [...this.state.items];
        items[index].title = title;
        this.setState({
            ...this.state,
            items
        })
    }
    handleShow = (type) => {
        this.setState({
            ...this.state,
            show: type
        });
    }
    render() {
        const todoList = this.computedItems().map((item, index) => {
            return (
                <TodoList
                    item={item}
                    index={index}
                    onActive={this.handleActive}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                    key={index}
                ></TodoList>
            )
        })

        return (
            <div className="container p5">
                <TodoInput
                    onSubmit={this.handleSubmit}

                ></TodoInput>
                {todoList}

                <button onClick={() => this.handleShow('all')}>All</button>
                <button onClick={() => this.handleShow('active')}>Active</button>
                <button onClick={() => this.handleShow('completed')}>Complete</button>
            </div>
        )
    }
}
