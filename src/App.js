import React, { Component } from 'react';
import logo from './logo.svg';
import KickedRotor from './graphics/AnimatedGraphics/KickedRotor/KickedRotor'
import TestAnimation from './graphics/InteractiveGraphics/TestAnimation/TestAnimation'

import styles from './App.module.sass'

class App extends Component {
  render() {
    return (
      <div className={ styles.App }>
				<TestAnimation />
				<KickedRotor />
      </div>
    );
  }
}

export default App;




