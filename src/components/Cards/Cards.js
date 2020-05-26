import React from 'react';
import styles from './Cards.css';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    console.log(confirmed)
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <div className={styles.cardContainer}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={confirmed.value}
                            />
                        </Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of active Covid-19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                            />
                        </Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                            />
                        </Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">Number of deaths from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        
    )
}
export default Cards;