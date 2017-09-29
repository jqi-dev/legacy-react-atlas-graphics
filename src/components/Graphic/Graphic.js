import React from 'react'
import styles from './Graphic.module.sass'

class Graphic extends React.Component {

	render() {
		return (
			<div className={ styles.Graphic }>
				<div className= { styles.GraphicCell }>
					{ this.props.children }
				</div>
			</div>
		)
	}	
}

export default Graphic

