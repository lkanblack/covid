import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { fetchData } from '../api';

function Dropdown({ handleCountrySelect }){
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        async function getCountries () {
            const getCountryList = fetchData();
            // const res = await fetch("https://covid.ourworldindata.org/data/owid-covid-data.json");
            // const getCountryList = await res.json();
            // console.log(getCountryList);
            // Object.keys(getCountryList).map(key => console.log(getCountryList[key].location))
            setCountries(await getCountryList);
        }

        getCountries();
    });

    console.log(countries);

    function onCountrySelect(e) {
        handleCountrySelect(e.target.value);
    }

    return (
        <Container className="content">
            <Form.Select aria-label="Default select example" onChange={onCountrySelect}>
                { Object.keys(countries).map((countryCode, index) => <option key={index} value={countryCode} >{countries[countryCode].location}</option>)}
            </Form.Select>
        </Container>
    )
}

export default Dropdown;