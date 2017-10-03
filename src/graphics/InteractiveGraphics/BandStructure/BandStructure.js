import React from 'react'
import { TweenMax } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import styles from './BandStructure.module.sass'
import InteractiveGraphic from '../../../components/InteractiveGraphic/InteractiveGraphic'

// Images
import mask from './images/mask-01.svg'
import bluepath from './images/bluepath-01.svg'
import greenpath from './images/greenpath.svg'
import graph_back from './images/graph_back-01.svg'
import labels from './images/labels.svg'
import gap_label from './images/gap_label.svg'
import band_label from './images/band_label.svg'
import greenpath_interior from './images/greenpath_interior.svg'
import bluepath_interior from './images/bluepath_interior.svg'
import graph from './images/graph-01.svg'


class BandStructure extends React.Component {

	constructor(props) {
		super(props)

		this.explanations = {
			insulator: 'In an insulator, electrons fill up a band right to the brim. There is a gap—a region of energy that no electron in the material can inhabit—to the next band. Unless electrons receive a big kick, they cannot reach the higher band. This keeps them from conducting current, since a voltage applied across the material will not change electron behavior.',
			conductor: 'In a conductor, electrons partially fill an energy band. This means there are slightly higher energies, available just out of reach, that electrons can jump to if they get a small kick. The voltage from a battery can provide that kick, causing the material to conduct.',
			semiconductor: 'A semiconductor is a lot like an insulator, but the gap between bands is much smaller. It\'s possible for a voltage to bridge this gap, promoting some electrons to the higher band and causing a current to flow. But take that impetus away and the material acts like an insulator again. This switching behavior is what drives the digital transistors that form the backbone of our electronic gadgets.',
			semimetal: 'Semimetals are unique in that they have bands that actually touch. Although electrons still only fill the lower band, mere thermal energy, from the temperature of the semimetal\'s surroundings, can give electrons the miniscule kick they need to reach the higher band. For Weyl semimetals, the bands around the touching point have a certain shape that makes excitations of electrons behave like Weyl fermions.'
		}
					
		this.state = {
			currentSelection: 'insulator'
		}

		this.changeSelection = this.changeSelection.bind(this)
	}

	changeSelection = (e) => {
		var id = e.currentTarget.id

		this.setState({
			currentSelection: id
		})
	}
	
	render() {
		return (
			<InteractiveGraphic>
				<div className={ styles.BandStructure }>
					<div className={ styles['gsap-container'] }>
						<img className={ styles['gsap-image'] } src={ mask } id="band_mask" />
						<img className={ styles['gsap-image'] } src={ bluepath } id="bluepath" />
						<img className={ styles['gsap-image'] } src={ greenpath } id="greenpath" />
						<img className={ styles['gsap-image'] } src={ graph_back } id="graph_back" />
						<img className={ styles['gsap-image'] } src={ labels } id="labels" />
						<img className={ styles['gsap-image'] } src={ gap_label } id="gap_label" />
						<img className={ styles['gsap-image-label'] } src={ band_label } id="band_label" />
						<div className={ styles.dragbounds }></div>
						<div className={ styles.linebounds }></div>
						<img className={ styles['gsap-image-behind'] } src={ greenpath_interior } id="green_behind" />
						<img className={ styles['gsap-image-behind'] } src={ bluepath_interior } id="blue_behind" />
						<img className={ styles['gsap-image-relative-behind'] } src={ graph } id="graph" />
					</div>

					<div className={ styles.caption }>
						<div className={ styles['button-container'] }>
							<button className={ styles.btn } selected="selected" id="insulator" onClick={ this.changeSelection }>Insulator</button>
					    <button className={ styles.btn } selected="disabled" id="conductor" onClick={ this.changeSelection }>Conductor</button>
					    <button className={ styles.btn } selected="disabled" id="semiconductor" onClick={ this.changeSelection }>Semiconductor</button>
					    <button className={ styles.btn } selected="disabled" id="semimetal" onClick={ this.changeSelection }>Semimetal</button>
					  </div>
						<div className={ styles['caption-paragraph'] }>
							<p className={ styles['caption-text'] }>{ this.explanations[this.state.currentSelection] }</p>
					  </div>
					</div>	
				</div>
		</InteractiveGraphic>
		)
	}
}

export default GSAP()(BandStructure)

