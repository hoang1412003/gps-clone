import { useState, type ReactNode } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import logo from '../assets/images/login/logo/log-mid.png'
import { Button, Layout, theme } from 'antd';

import CustomMenu from './menu/CustomMenu';
import Logout from './logout';


const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [showLogout, setShowLogout] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <>
    {showLogout && <Logout setShowLogout = {setShowLogout}/>}
      <Layout className='h-full'>
        <Sider trigger={null} collapsible collapsed={collapsed} className='relative'>
          <div style={{ padding: 16, textAlign: 'center' }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: collapsed ? 40 : 120, transition: 'width 0.3s' }}
            />
          </div>
          <CustomMenu setShowLogout ={setShowLogout}/>
          <Header
            style={{
              padding: 0,
              background: '#000a14',
              cursor: 'pointer',
              position: 'absolute',
              width: '100%',
              bottom: 1,
              lineHeight: 0,
              height: '36px'
            }}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              style={{
                fontSize: '16px',
                height: '36px',
                color: 'white',
                width: '100%',
              }}
            />
          </Header>
        </Sider>
        <Layout>
          <Content
            style={{
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;