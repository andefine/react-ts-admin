import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import AsideMenu from '@/layout/aside-menu/aside-menu'
import Home from '@/views/home/home'
import './app.scss'

const { Header, Content } = Layout

const App: React.FC = () => {
  return (
    <Layout className="app">
      <AsideMenu className="app__sider">sider</AsideMenu>
      <Layout>
        <Header>header</Header>
        <Content>
          <Switch>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
