import React, { Component } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import {fetchData} from './api/config';
import covidImg from './image/covid.png';

class App extends Component{
    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryPicker = async (country) => {
        const fetchedData = await fetchData(country)
        
        this.setState({data: fetchedData, country: country})
    }

    render(){
        const {data, country} = this.state;

        return(
            <div className={styles.container}>
                <img className= {styles.image} src={covidImg} alt="CORONA VIRUS"/>
                <Cards data={data}/>
                <CountryPicker handleCountryPicker={this.handleCountryPicker}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;
