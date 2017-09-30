import React, { Component } from 'react';
import KickedRotor from './graphics/AnimatedGraphics/KickedRotor/KickedRotor'
import TestAnimation from './graphics/InteractiveGraphics/TestAnimation/TestAnimation'
import BandStructure from './graphics/InteractiveGraphics/BandStructure/BandStructure'
//import Graphic from './components/Graphic/Graphic'

import styles from './App.module.sass'

class App extends Component {
  render() {
    return (
      <div className={ styles.App }>
				<h1>The Quantum Atlas Graphics Gallery</h1>
				<div className={ styles.gallery }>
					<div className={ styles.galleryGrid }>
						<BandStructure />
						<TestAnimation />
						<KickedRotor />
						<TestAnimation />
					</div>
				</div>
      </div>
    );
  }
}

export default App;




