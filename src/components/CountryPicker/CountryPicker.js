import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api/config';
import styles from './CountryPicker.module.css'

const CountryPicker = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setCountry(await fetchCountries())
        }
        fetchCountriesAPI()

    },[setCountry]);

    console.log(country)
    
    return(
        
        <FormControl className={styles.FormControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
        
    )
}
export default CountryPicker;