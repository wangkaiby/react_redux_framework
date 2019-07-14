import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Button, message, Col, Row } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as oldActionCreator from '../actions'

import Logo from '../static/react.png'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
let nowLocation = window.location.pathname.split('/')[1] || 'login'

console.log(nowLocation)

const LayoutPanel = (props) => {
  function handleMenuClick(e) {
    message.info('Click on menu item.');
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );
return(
    <Layout>
      <Header className="header">
      <Row type="flex" justify="end">
        <Col span={6}>
          <img alt='pic' height='64' src={Logo} />
        </Col>
        <Col span={15}></Col>
        <Col span={3} justify='end'>
          <Dropdown overlay={menu}>
            <Button>
              {props.userId} <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
      </Row>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[nowLocation]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  学习栏
                </span>
              }
            >
              <Menu.Item key="todos"><Link to="/todos">Todos</Link></Menu.Item>
              <Menu.Item key="login"><Link to="/home">Login</Link></Menu.Item>
              <Menu.Item key="koa"><Link to="/koa">Koa</Link></Menu.Item>
              <Menu.Item key="hoc"><Link to="/hoc">Hoc</Link></Menu.Item>
              <Menu.Item key="extends"><Link to="/extends">Extends</Link></Menu.Item>
              <Menu.Item key="usehook"><Link to="/usehook">usehook</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                   工具栏
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
      ...state.layout
  }
}
function mapDispatchToProps(dispatch) {
  return {
      ...bindActionCreators(oldActionCreator, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LayoutPanel);
