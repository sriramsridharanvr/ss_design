import React, { useState, useLayoutEffect } from "react";
import { Layout, Menu, Avatar, Breadcrumb } from "antd";
import {
  PieChartOutlined,
  LogoutOutlined,
  SettingOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
  ExperimentOutlined,
  GroupOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mainHeight, setMainHeight] = useState(0);

  useLayoutEffect(() => {
    adjustHeight();
    const resizeListener = window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const adjustHeight = () => {
    const topMenu = document.querySelector("#main_top_menu");
    if (topMenu) {
      console.log("Top menu height: ", topMenu.offsetHeight);
    }
    const viewportHeight = window.innerHeight;
    const mainContentHeight = viewportHeight - topMenu.offsetHeight;
    setMainHeight(mainContentHeight);
  };

  const items = [];
  for (var i = 1; i < 5; i++) {
    items.push(
      <Menu.Item key={i} icon={<PieChartOutlined />}>
        Option {i}
      </Menu.Item>
    );
  }

  const avatar = (
    <Avatar
      style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
      size="large"
    >
      SS
    </Avatar>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="main-sidebar"
        collapsible
        onCollapse={onCollapse}
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo">
          <span className="full">Screen Scanner</span>
          <span className="abbr">SS</span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            Apps
          </Menu.Item>
          <Menu.Item key="3" icon={<ExperimentOutlined />}>
            Tests
          </Menu.Item>
          <Menu.Item key="4" icon={<GroupOutlined />}>
            Suites
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="main-page-layout" style={{ marginLeft: 200 }}>
        <Header className="top-menu-bar" id="main_top_menu">
          <Menu theme="light" mode="horizontal">
            {/* <h3>Element Scan</h3> */}
            <Menu.SubMenu title={avatar} style={{ float: "right" }}>
              <Menu.Item icon={<UserOutlined />}>Sriram Sridharan</Menu.Item>
              <Menu.Item icon={<SettingOutlined />}>Preferences</Menu.Item>
              <Menu.Item icon={<LogoutOutlined />}>Sign Out</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>
        <div
          className="main-content"
          style={{ minHeight: mainHeight + "px", maxHeight: mainHeight + "px" }}
        >
          <Content>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="#">Apps</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="#">EZCash</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Element Scan</Breadcrumb.Item>
            </Breadcrumb>
            <h2>Element Scan</h2>
          </Content>
          <Footer>&copy; Yethi 2020. All rights reserved</Footer>
        </div>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
