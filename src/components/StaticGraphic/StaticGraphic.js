import React from 'react'
import Graphic from '../Graphic/Graphic'

class StaticGraphic extends React.Component {

	render() {
		return (
			<Graphic>
				<div className="static-graphic">
					<h1>I'm static :(</h1>
					{ this.props.children }
				</div>
			</Graphic>
		)
	}	
}

export default StaticGraphic

