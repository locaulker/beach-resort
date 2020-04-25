import React, { Component } from "react"
import defaultBcg from "../images/room-1.jpeg"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { RoomContext } from "../contexts/context"
import StyledHero from "../components/StyledHero"

class SingleRoom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg,
		}
	}

	static contextType = RoomContext

	//componentDidMount() {}

	render() {
		const { getRoom } = this.context
		const room = getRoom(this.state.slug)

		if (!room) {
			return (
				<div className="error">
					<h3>Oops! No such room is found...</h3>
					<Link to="/rooms" className="btn-primary">
						Back to Rooms
					</Link>
				</div>
			)
		}

		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images,
		} = room

		const [mainImg, ...defaultImg] = images
		//console.log(defaultImg)
		return (
			<>
				<StyledHero img={mainImg || this.state.defaultBcg}>
					<Banner title={`${name} room`}>
						<Link to="/rooms" className="btn-primary">
							Back to rooms
						</Link>
					</Banner>
				</StyledHero>
				<section className="single-room">
					<div className="single-room-images">
						{defaultImg.map((item, index) => {
							return <img key={index} src={item} alt={name} />
						})}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>Details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>Info</h3>
							<p>
								<strong>Price</strong>: ${price}
							</p>
							<p>
								<strong>Size</strong>: {size} sf
							</p>
							<p>
								<strong>Max Capacity</strong>:{" "}
								{capacity > 1 ? `${capacity} people` : `${capacity} person`}
							</p>
							<p>
								<strong>Pets</strong>:{" "}
								{pets ? "Allowed" : "Sorry! No Pets Allowed"}
							</p>
							<p>
								<strong>Breakfast</strong>:{" "}
								{breakfast && "Free breakfast included"}
							</p>
						</article>
					</div>
				</section>
				<section className="room-extras">
					<h6>Extras</h6>
					<ul className="extras">
						{extras.map((item, index) => {
							return <li key={index}> &ndash; {item}</li>
						})}
					</ul>
				</section>
			</>
		)
	}
}

export default SingleRoom
