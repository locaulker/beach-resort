import React, {Component} from "react"

// 01. Create the RoomContext (Includes Provider and Consumer)
const RoomContext = React.createContext()

// 02. Creates: The Provider
class RoomProvider extends Component {
	state = {
		greeting: "Hello",
		name: "John",
	}

	render() {
		return (
			<RoomContext.Provider value={{...this.state}}>
				{this.props.children}
				{/*<h1>hello from Room Provider</h1>*/}
			</RoomContext.Provider>
		)
	}
}

// 03. Creates: The Consumer
const RoomConsumer = RoomContext.Consumer

export {RoomProvider, RoomConsumer, RoomContext}
