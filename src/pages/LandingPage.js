import '../App.scss';
import '../assets/styles/LandingPage.scss';
import { Layout, Row, Col, Button, Input } from 'antd';

const { Content } = Layout;


function LandingPage() {
  return ( 
    <Content className="landing-image" style={{ padding: '0' }}>
        <Row className="search-form">
            <Row className="search-form-group">
                <Col span={8}>
                    <Input className="filter" size="large" placeholder="What are you looking for?"/>
                </Col>
                <Col span={12}>
                    <Input className="filter" size="large" placeholder="Address, neighborhood..."/>
                </Col>
                <Col span={4}>
                    <Button className="search-button" size="large" type="primary" htmlType="submit">
                        Search
                    </Button>
                </Col>
            </Row>
        </Row>
    </Content>
  );
}

export default LandingPage;
