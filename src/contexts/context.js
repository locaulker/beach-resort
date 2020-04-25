import React, { Component } from "react"
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
		type: "all",
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false,
	}

	// getData (external data)

	componentDidMount() {
		// this.getData
		let rooms = this.formatData(items)
		let featuredRooms = rooms.filter(room => room.featured === true)
		let maxPrice = Math.max(...rooms.map(item => item.price))
		let maxSize = Math.max(...rooms.map(item => item.size))

		this.setState({
			rooms,
			featuredRooms,
			sortedRooms: rooms,
			loading: false,
			price: maxPrice,
			maxPrice,
			maxSize,
		})
	}

	formatData(items) {
		let tempItems = items.map(item => {
			let id = item.sys.id
			let images = item.fields.images.map(image => image.fields.file.url)
			let room = { ...item.fields, images, id }

			return room
		})
		return tempItems
	}

	// Single Room Function
	getRoom = slug => {
		let tempRooms = [...this.state.rooms]
		const room = tempRooms.find(room => room.slug === slug)

		return room
	}

	handleChange = event => {
		const target = event.target
		const value = target.type === "checkbox" ? target.checked : target.value
		const name = event.target.name
		this.setState(
			{
				[name]: value,
			},
			this.filteredRooms
		)
	}

	filteredRooms = () => {
		let {
			rooms,
			type,
			capacity,
			price,
			minSize,
			maxSize,
			breakfast,
			pets,
		} = this.state

		// All rooms
		let tempRooms = [...rooms]

		// Transform string to integer value
		capacity = parseInt(capacity)
		price = parseInt(price)

		// Filter by type
		if (type !== "all") {
			tempRooms = tempRooms.filter(room => room.type === type)
		}

		// Filter by capacity
		if (capacity !== 1) {
			tempRooms = tempRooms.filter(room => room.capacity >= capacity)
		}

		// Filter by price
		tempRooms = tempRooms.filter(room => room.price <= price)

		// Filter by Size
		tempRooms = tempRooms.filter(
			room => room.size >= minSize && room.size <= maxSize
		)

		// Filter by Breakfast Choice
		if (breakfast) {
			tempRooms = tempRooms.filter(room => room.breakfast === true)
		}

		// Filter by Pets' Choice
		if (pets) {
			tempRooms = tempRooms.filter(room => room.pets === true)
		}

		// Change state
		this.setState({
			sortedRooms: tempRooms,
		})
	}

	render() {
		return (
			<RoomContext.Provider
				value={{
					...this.state,
					getRoom: this.getRoom,
					handleChange: this.handleChange,
				}}
			>
				{this.props.children}
			</RoomContext.Provider>
		)
	}
}

// 03. Creates: The Consumer
const RoomConsumer = RoomContext.Consumer

export const withRoomConsumer = Component => {
	return function ConsumerWrapper(props) {
		return (
			<RoomConsumer>
				{value => <Component {...props} context={value} />}
			</RoomConsumer>
		)
	}
}

export { RoomProvider, RoomConsumer, RoomContext }
