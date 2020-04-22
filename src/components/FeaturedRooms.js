import React, {Component} from "react"
import {RoomContext} from "../contexts/context"

export default class FeaturedRooms extends Component {
	static contextType = RoomContext

	render() {
		const {greeting, name} = this.context

		return (
			<div>
				{greeting} from {name} FeaturedRooms
			</div>
		)
	}
}
