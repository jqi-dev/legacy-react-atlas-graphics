import React from 'react'
import Graphic from '../Graphic/Graphic'
import styles from './InteractiveGraphic.module.sass'

class InteractiveGraphic extends React.Component {

	render() {
		return (
			<Graphic>
				<div className={ styles.InteractiveGraphic }>
					<h3>I'm interactive!</h3>
					{ this.props.children }
				</div>
			</Graphic>
		)
	}	
}

export default InteractiveGraphic


