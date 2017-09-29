import React from 'react'
import Graphic from '../Graphic/Graphic'
import styles from './AnimatedGraphic.module.sass'

class AnimatedGraphic extends React.Component {
	
	announceString = () => {
		return "I'm animated!"
	}

	render() {
		return (
			<Graphic>
				<div className={ styles.AnimatedGraphic }>
				<h3>{ this.announceString() }</h3>
					{ this.props.children }
				</div>
			</Graphic>
		)
	}	
}

export default AnimatedGraphic


