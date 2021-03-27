import './App.css';
import './assets/css/resTemplate.css';
import { Row, Col } from 'antd';
import OutdoorDining from "./assets/images/OutdoorDining.jpg"


function Test() {
    return ( 
            <div className = "top_section_detail" >
                <Row>
                    <Col span={8}>Pizzeria da Alfredo ITALIAN</Col>
                    <Col span={8} style={{ textAlign: 'right' }}><a href = "" className = ""  style={{ textAlign: 'right' }}>View Photos</a></Col>
                </Row>
                <Row>
                    <Col span={6}>27 Old Gloucester St, 4530-<a href ="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x47e66e1de36f4147:0xb6615b4092e0351f!2sAssistance+Publique+-+H%C3%B4pitaux+de+Paris+(AP-HP)+-+Si%C3%A8ge!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="blank">Get directions</a></Col>

                    <Col span={6} style={{ textAlign: 'right' }}><a href = "" className = "" >Wishlist</a></Col>
                </Row>
            </div>
        );

}

export default Test;