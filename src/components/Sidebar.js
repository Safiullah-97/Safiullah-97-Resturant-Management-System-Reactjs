import React from 'react';
import { Layout, Menu, Typography} from 'antd';
import './css/Sidebar.css'
import 'antd/dist/antd.css';
import { Link} from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Sider } = Layout;
const { Title } = Typography

const Sidebar = () => {

 return (
  <Layout>       
    <Header className= "header" >
    <Title className = "title" style = {{color : 'white'}} level = {3}>Resulator</Title>
      <div className= "logo"/>

    </Header>
    <Layout style={{position: 'absolute', marginTop: '65px'}}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="vertical"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          className = 'menu'
        >
          <Menu.Item key = 'Dashboard'>
            <Link to = "/dashboard">Dashboard</Link>
          </Menu.Item >
          <Menu.Item key="Report">
          <Link to = "/Report">Report</Link>
          </Menu.Item>
          <SubMenu key="Kitchen" title="Kitchen" >
          <Menu.Item key="Kitchen">
          <Link to = "/kitchen">Kitchen</Link>
            </Menu.Item>
            <Menu.Item key="LiveKitchen">
          <Link to = "/LiveKitchen">Live Kitchen</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu title="Orders">
            <Menu.Item><Link to = "/neworder">New Order</Link></Menu.Item>
            <Menu.Item>All Order</Menu.Item>
            <Menu.Item><Link to = "/nonpaidorder">Non-Paid Order</Link></Menu.Item>
          </SubMenu>
          <Menu.Item><Link to = "/supplier">Supplier</Link></Menu.Item>
          <SubMenu title="Acounting">
            <SubMenu title="Expense">
            <Menu.Item >Add Expense</Menu.Item>
            <Menu.Item>All Expense</Menu.Item>
          </SubMenu>
            <Menu.Item >Income</Menu.Item>            
          </SubMenu>
          <Menu.Item  key = 'TableManagement' title="Table Management">
          <Link to = "/TableManagement">Table Management</Link>
          </Menu.Item>
          <SubMenu title="Stock Management">
            <Menu.Item><Link to = "/newpurse">New Purse</Link></Menu.Item>
            <Menu.Item>All Purses</Menu.Item>
            <Menu.Item>All Stock</Menu.Item>
            <Menu.Item><Link to = "/additem">Add Item</Link></Menu.Item>
          </SubMenu>
          <SubMenu title="Dish">
            <Menu.Item ><Link to = "/adddish">Add Dish</Link></Menu.Item>
            <Menu.Item>All Dish</Menu.Item>
          </SubMenu>
          <SubMenu title="Employee">
            <Menu.Item><Link to = "/addemployee">Add Employee</Link></Menu.Item>
            <Menu.Item><Link to = "/allemployee">All Employee</Link></Menu.Item>
          </SubMenu>
            <SubMenu title="Setting">
            <Menu.Item>123</Menu.Item>
            <Menu.Item>abc</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Layout>
  </Layout>
);
}

export default Sidebar;