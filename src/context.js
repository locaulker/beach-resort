import React, { Component } from 'react'

// 01. Create a context variable
const RoomContext = React.createContext()

class RoomProvider extends Component {
	render() {
		return (
			<RoomContext.Provider value="hello">
				{this.props.children}
				<h1>s</h1>
			</RoomContext.Provider>
		)
	}
}

export default RoomProvider
