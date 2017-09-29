import React from 'react'
import { TimelineMax } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import styles from './TestAnimation.module.css'
import InteractiveGraphic from '../../../components/InteractiveGraphic/InteractiveGraphic'

function GSAPAnimation({ target }) {
	var square = target.find({ name: 'square' })
	console.log(target)
	console.log(square)

	var tl = new TimelineMax({ repeat: -1 })
	tl.to(square, 2, { scale: 2 })

	return tl
}


class TestAnimation extends React.Component {
	
	// When React mounts the component, add an animation as a property of this component
	componentDidMount() {
		this.animation = this.addAnimation(GSAPAnimation)
	}
	
	// Custom event handler
	pause = () => {
		this.animation.paused(!this.animation.paused())
	}
	
	render() {
		return (
			<InteractiveGraphic>
				<div className="test-animation">
					<div className={ styles.square } name='square' />
					<button className={ styles.pause } onClick={ this.pause }>
						Pause
					</button>
				</div>
			</InteractiveGraphic>
		)
	}
}

export default GSAP()(TestAnimation)

