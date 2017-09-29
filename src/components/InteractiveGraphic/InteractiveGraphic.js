import React from 'react'

class InteractiveGraphic extends React.Component {

	constructor(props) {
		super(props)
		console.log(this.props)
	}


	render() {
		return (
			<div className="interactive-graphic">
				<h1>I'm interactive!</h1>
				{ this.props.children }
			</div>
		)
	}	
}

export default InteractiveGraphic


