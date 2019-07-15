import React from 'react'
import { Layout } from 'antd'
import AsideMenu from '@/views/aside-menu/aside-menu'
import './app.scss'

const { Header, Content } = Layout

const App: React.FC = () => {
  return (
    <Layout className="app">
      <AsideMenu className="app__sider">sider</AsideMenu>
      <Layout>
        <Header>header</Header>
        <Content>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
