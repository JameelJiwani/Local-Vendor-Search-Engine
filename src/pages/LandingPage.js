import '../App.scss';
import '../assets/styles/LandingPage.scss';
import { Layout, Row, Col, Button, Input, AutoComplete } from 'antd';
import Script from 'react-load-script';
import React, { useState } from 'react';


const { Content } = Layout;

function LandingPage() {
    const [inputValue, setInputValue] = useState("");
    // const [filterValue, setFilterValue] = useState("");
    const [test, setValues] = useState({});

    let autocomplete;

    function handleScriptLoad() {   // Declare Options For Autocomplete 
        const options = {  }; 
        
        // Initialize Google Autocomplete 
        /*global google*/
        autocomplete = new google.maps.places.Autocomplete(
                            document.getElementById(`autocomplete`),
                            options );  // Avoid paying for data that you don't need by restricting the 
        // set of place fields that are returned to just the address
        // components and formatted address
        autocomplete.setFields(['address_components',   
                                    'formatted_address']);  // Fire Event when a suggested name is selected
        autocomplete.addListener(`place_changed`, handlePlaceSelect); 
    }

    function handlePlaceSelect() {

        // Extract City From Address Object
        const addressObject = autocomplete.getPlace();
        const address = addressObject.address_components;

        // Check if address is valid
        if (address) {
            // Set State
            setValues(
            {
                city: address[5].long_name,
                query: addressObject.formatted_address,
            });
        }
        
        setInputValue(addressObject.formatted_address);
    }

    const onChangeHandler = event => {
        setInputValue(event.target.value);
        
    };

    const search = event => {
        console.log(event);
    };

    return ( 
        <Content className="landing-image" style={{ padding: '0' }}>
            <Col className="landing-title">
                <Row className="flex-parent">
                    <h1 className="white">Discover & Book</h1>
                </Row>
                <Row className="flex-parent">
                    <h2 className="white">The best restaurants at the best price</h2>
                </Row>
            </Col>
            <Row className="search-form">
                <Row className="search-form-group">
                    <Col span={8}>
                        <AutoComplete style={{ width: '100%' }} options={[{value: 'North American'},{value: 'Mexican'},{value: 'Italian'},{value: 'Asian'},{value: 'Indian'},{value: 'Vegan'},{value: 'Dessert'},{value: 'Middle Eastern'}]} size="large" placeholder="What are you looking for?"/>
                        {/* <AutoComplete
                            style={{ width: '70%' }}
                            placeholder="Email"
                            options={[{ value: 'text 1' }, { value: 'text 2' }]}
                        /> */}
                        {/* </Input> */}
                    </Col>
                    <Col span={12}>
                        <Input className="filter" size="large" id="autocomplete" placeholder="Address, neighborhood..." hintText="Search City" onChange={onChangeHandler} value={inputValue}/>
                    </Col>
                    <Col span={4}>
                        <Button className="search-button" size="large" type="primary" htmlType="submit" onClick={search}>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Row>
            <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD29GkH6ZmTZaJp8LZDotifOKsKgDW8IHI&libraries=places" onLoad={handleScriptLoad}/>
        </Content>
  );
}

export default LandingPage;
