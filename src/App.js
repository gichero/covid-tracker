import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.css'

class App extends Component{
    render(){
        return(
            <div className={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}
export default App;
