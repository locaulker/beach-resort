import React, {Component} from "react"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from "./Title"

class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "Free Cocktails",
				info:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, consequatur?",
			},
			{
				icon: <FaHiking />,
				title: "Endless Hiking",
				info:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, consequatur?",
			},
			{
				icon: <FaShuttleVan />,
				title: "Free Shuttle",
				info:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, consequatur?",
			},
			{
				icon: <FaBeer />,
				title: "Quality Beer",
				info:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, consequatur?",
			},
		],
	}

	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						)
					})}
				</div>
			</section>
		)
	}
}

export default Services
