import React, { Component } from 'react';
import TodoListUI from "./TodoListUi"
import store from '../store/index'

import {
	changeInputAction,
	addItemAction,
	deleteItemAction,
} from "../store/actionCreators.js"
class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()

	}
	storeChange = () => {
		console.log("store changed")
		this.setState(store.getState())
	}
	componentDidMount() {
        store.subscribe(this.storeChange) //订阅Redux的状态
	}
	//--------关键代码------start
	changeInputValue = e => {
		const action = changeInputAction(e.target.value)
		store.dispatch(action)
	}
	clickBtn = () => {
		const action = addItemAction()
		store.dispatch(action)
	}
	deleteItem = index => {
		const action = deleteItemAction(index)
		store.dispatch(action)
	}
	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				changeInputValue={this.changeInputValue}
				clickBtn={this.clickBtn}
				deleteItem={this.deleteItem}
			/>
		)
	}
}

export default TodoList;