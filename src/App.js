import logo from './assets/icons/logo.png';
import './App.scss';
import { Layout, Menu, Row, Col } from 'antd';
import LandingPage from './pages/LandingPage.js'
import Test from './Test.js'

const { Header, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header>
          <Row>
            <Col span={12}>
              <img src={logo} className="logo" alt="logo" />
              <h3>Website</h3>
            </Col>
            <Col span={12}>
              <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Test/>
        <LandingPage/>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
}

export default App;
