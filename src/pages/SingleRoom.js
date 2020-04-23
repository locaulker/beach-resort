import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../contexts/context'

class SingleRoom extends Component {
	constructor(props) {
		super(props)
		//console.log(this.props)
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg
		}
	}

	static contextType = RoomContext

	//componentDidMount() {}

	render() {
		const { getRoom } = this.context
		const room = getRoom(this.state.slug)
		console.log(room)

		return (
			<div>
				Hello from <strong>Single Room</strong> page
			</div>
		)
	}
}

export default SingleRoom
