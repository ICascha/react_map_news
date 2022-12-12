import { Col, Layout, Row, Checkbox } from "antd";
import MapComponent from "../Map/MapComponent";
import CountrySelection from "../Controls/CountrySelection";
import GranularitySlider from "../Controls/GranularitySlider";
import TestBar from "../charts/TestBar";
import React from "react";
import { LatLngTuple } from "leaflet";
import DateSelection from "./DateSelection";

const { Content } = Layout;

const DashBoard = () => {
  const startMapCenter: LatLngTuple = [5.152149, 46.199615];
  const startMapZoom: number = 5.2;

  const [mapCenter, setMapCenter] = React.useState(startMapCenter);
  const [mapZoom, setMapZoom] = React.useState(startMapZoom);
  const [N, setN] = React.useState(1);

  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const [drawIPC, setDrawIPC] = React.useState(false);
  const [drawMap, setDrawMap] = React.useState(true);
  const [selectedRegion, setSelectedRegion] = React.useState("");
  return (
    <>
      <Content style={{ margin: "16px", height: "100%" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, height: "100%", width: "100%" }}
        >
          <Row style={{ height: "100%" }}>
            <Col span={12}>
              <CountrySelection setMapCenter={setMapCenter} />
              <DateSelection
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
              <GranularitySlider setN={setN} />
              <div style={{ height: "70%" }}>
                {startDate && <TestBar N={N} />}
                <Checkbox
                  onChange={(e) => setDrawMap(e.target.checked)}
                  defaultChecked={true}
                >
                  show Map
                </Checkbox>
                <Checkbox onChange={(e) => setDrawIPC(e.target.checked)}>
                  show IPC
                </Checkbox>
                <h1>{selectedRegion}</h1>
              </div>
            </Col>
            <Col span={12}>
              <MapComponent
                center={mapCenter}
                zoom={mapZoom}
                drawIPC={drawIPC}
                drawMap={drawMap}
                setSelectedRegion={setSelectedRegion}
                startDate={startDate}
                endDate={endDate}
              />
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default DashBoard;
