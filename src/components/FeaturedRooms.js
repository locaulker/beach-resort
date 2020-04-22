import React, { Component } from "react"
import { RoomContext } from "../contexts/context"

export default class FeaturedRooms extends Component {
	static contextType = RoomContext

	render() {
		const { featuredRooms: rooms } = this.context
		console.log(rooms)
		return <div>{/* stuff goes here */}</div>
	}
}
