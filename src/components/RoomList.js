import React from "react"
import Room from "./Room"

const RoomList = ({rooms}) => {
	if (rooms.length === 0) {
		return (
			<div className="empty-search">
				<p>
					Oops! Unfortunately <strong>No Rooms Match your search</strong>.
				</p>
			</div>
		)
	}

	return (
		<section className="roomslist">
			<div className="roomslist-center">
				{rooms.map((item) => {
					return <Room key={item.id} room={item} />
				})}
			</div>
		</section>
	)
}

export default RoomList
