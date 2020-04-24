import React from "react"
import RoomFilter from "./RoomFilter"
import RoomList from "./RoomList"
import {withRoomConsumer} from "../contexts/context"
import Loading from "./Loading"

const RoomsContainer = ({context}) => {
	const {loading, sortedRooms, rooms} = context
	if (loading) {
		return <Loading />
	}

	return (
		<>
			<RoomFilter rooms={rooms} />
			<RoomList rooms={sortedRooms} />
		</>
	)
}

export default withRoomConsumer(RoomsContainer)

//const RoomsContainer = () => {
//	return (
//		<RoomConsumer>
//			{(value) => {
//				const {loading, rooms, sortedRooms} = value

//				if (loading) {
//					return <Loading />
//				}

//				return (
//					<div>
//						<p>Hello fron RoomsContainer</p>
//						<RoomFilter rooms={rooms} />
//						<RoomList rooms={sortedRooms} />
//					</div>
//				)
//			}}
//		</RoomConsumer>
//	)
//}

//export default RoomsContainer
