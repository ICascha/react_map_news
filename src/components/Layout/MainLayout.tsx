import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import React from "react";
import "./Layout.css";
import MapComponent from "../Map/MapComponent";
import { LatLngTuple } from "leaflet";
import CountrySelection from "../Controls/CountrySelection";

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
  const startMapCenter: LatLngTuple = [5.152149, 46.199615];
  const startMapZoom: number = 5.2;

  const [mapCenter, setMapCenter] = React.useState(startMapCenter);
  const [mapZoom, setMapZoom] = React.useState(startMapZoom);

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout style={{ height: "100vh" }}>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, height: "10%" }}
        />
        <Content style={{ margin: "24px 16px 0", height: "80%" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, height: "100%", width: "100%" }}
          >
            <Row style={{ height: "100%" }}>
              <Col span={12}>
                <CountrySelection setMapCenter={setMapCenter} />
              </Col>
              <Col span={12}>
                <MapComponent center={mapCenter} zoom={mapZoom} />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
