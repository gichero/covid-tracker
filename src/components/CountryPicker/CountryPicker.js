import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import {fetchCountries} from '../../api/config';
import styles from './CountryPicker.module.css'

const CountryPicker = (props) => {

    const [getCountry, setGetCountry] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setGetCountry(await fetchCountries())
        }
        fetchCountriesAPI()

    },[setGetCountry]);
    // console.log(getCountry);
    return(
        
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => {props.handleCountryPicker(e.target.value)}}>
                <option value="">Global</option>
                {getCountry.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        
    )
}
export default CountryPicker;