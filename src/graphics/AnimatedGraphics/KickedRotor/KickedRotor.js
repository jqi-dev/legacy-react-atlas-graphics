import React from 'react'
import AnimatedGraphic from '../../../components/AnimatedGraphic/AnimatedGraphic'

import rotor_image from './kicked_rotor_web.gif'

class KickedRotor extends React.Component {

	render() {
		return (
			<AnimatedGraphic>
				<img src={ rotor_image } />
			</AnimatedGraphic>
		)
	}
}

export default KickedRotor
