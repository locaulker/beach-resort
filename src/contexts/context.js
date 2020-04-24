import React, {Component} from "react"
import items from "../data"

// 01. Create the RoomContext (Includes Provider and Consumer)
const RoomContext = React.createContext()

// 02. Creates: The Provider
class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
	}

	// getData

	componentDidMount() {
		// this.getData
		let rooms = this.formatData(items)
		let featuredRooms = rooms.filter((room) => room.featured === true)

		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false,
		})
	}

	formatData(items) {
		let tempItems = items.map((item) => {
			let id = item.sys.id
			let images = item.fields.images.map((image) => image.fields.file.url)
			let room = {...item.fields, images, id}

			return room
		})
		return tempItems
	}

	// Single Room Function
	getRoom = (slug) => {
		let tempRooms = [...this.state.rooms]
		const room = tempRooms.find((room) => room.slug === slug)

		return room
	}

	render() {
		return (
			<RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}

// 03. Creates: The Consumer
const RoomConsumer = RoomContext.Consumer

export const withRoomConsumer = (Component) => {
	return function CoonsumerWrapper(props) {
		return (
			<RoomConsumer>
				{(value) => <Component {...props} context={value} />}
			</RoomConsumer>
		)
	}
}

export {RoomProvider, RoomConsumer, RoomContext}
