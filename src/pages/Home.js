import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"

const Home = () => {
	return (
		<Hero>
			<Banner title="Luxury Rooms" subtitle="Deluxe Rooms starting from $299">
				<Link to="/rooms" className="btn-primary">
					Our Rooms
				</Link>
			</Banner>
		</Hero>
	)
}
export default Home
