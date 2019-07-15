import React from 'react'
import { Layout, Menu } from 'antd'
import './aside-menu.scss'

const { Sider } = Layout

interface IProps {
  className?: string
}

export default class AsideMenu extends React.Component<IProps> {
  render () {
    const { className } = this.props
    
    return (
      <Sider className={`aside-menu ${className || ''}`}>
        <Menu
          mode="inline"
          theme="dark"
        >
          <Menu.Item>首页</Menu.Item>
          <Menu.SubMenu
            title={
              <span>设备管理</span>
            }
          >
            <Menu.Item>设备列表</Menu.Item>
            <Menu.Item>二级菜单</Menu.Item>
            <Menu.Item>二级菜单</Menu.Item>
            <Menu.Item>二级菜单</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>商品管理</Menu.Item>
          <Menu.Item>票务管理</Menu.Item>
          <Menu.Item>服务点管理</Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
