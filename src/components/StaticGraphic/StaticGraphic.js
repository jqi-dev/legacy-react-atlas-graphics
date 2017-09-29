import React from 'react'
import Link from 'gatsby-link'

class StaticGraphic extends React.Component {

	constructor(props) {
		super(props)
		console.log(this.props)
	}


	render() {
		return (
			<div className="static-graphic">
				<h1>I'm static :(</h1>
				{ this.props.children }
			</div>
		)
	}	
}

export default StaticGraphic

