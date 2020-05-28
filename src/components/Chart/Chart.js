import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/config';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = (props) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData()) 
        }
        console.log(dailyData);
        fetchAPI();
    },[]);
    
    const lineChart = (
        dailyData.length
        ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, .5)',
                        fill: true
                    }]
                }}
            />
        ) : null
    )

    const barChart = (
        props.confirmed
        ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.8)','rgba(0, 255, 0, 0.8)','rgba(255, 0, 0, 0.8)'],
                                        data:[props.confirmed.value, props.recovered.value, props.deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${props.country}` }
                }}
            />
        ) : null
    )

    return(
        
        <div className={styles.container}>
            {props.country ? barChart : lineChart}
        </div>
        
    )
}
export default Chart;