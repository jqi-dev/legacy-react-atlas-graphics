import React from 'react'

class AnimatedGraphic extends React.Component {

	constructor(props) {
		super(props)
		console.log(this.props)
	}


	render() {
		return (
			<div className="animated-graphic">
				<h1>I'm animated!</h1>
				{ this.props.children }
			</div>
		)
	}	
}

export default AnimatedGraphic


