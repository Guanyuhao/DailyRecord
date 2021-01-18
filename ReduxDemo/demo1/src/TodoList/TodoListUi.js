import React, { Component } from "react"
import "antd/dist/antd.css"
import { Input, Button, List } from "antd"
class TodoListUi extends Component {
	render() {
		return (
			<div style={{ margin: "10px" }}>
				<div>
					<Input
						style={{ width: "250px", marginRight: "10px" }}
						onChange={this.props.changeInputValue}
						value={this.props.inputValue}
					/>
					<Button type="primary" onClick={this.props.clickBtn}>
						增加
					</Button>
					<UIList {...this.props}></UIList>
				</div>
			</div>
		)
	}
}

class UIList extends Component {
	constructor(props){
        super(props)
        this.state = {
            oldList: []
        }
    }
	componentWillReceiveProps() {
		//子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行
		this.setState({ oldList: this.props.list })
	}
	shouldComponentUpdate(nextProps, nextState) {
		// 优化 list 渲染
		if (
			nextProps.list &&
			nextProps.list.join("") === this.state.oldList.join("")
		) {
			return false
		}
		return true
	}
	render() {
		return (
			<div>
				<div style={{ margin: "10px", width: "300px" }}>
					<List
						bordered
						dataSource={this.props.list}
						renderItem={(item, index) => (
							<List.Item
								onClick={() => {
									this.props.deleteItem(index)
								}}
							>
								{item}
							</List.Item>
						)}
					/>
				</div>
			</div>
		)
	}
}

export default TodoListUi
