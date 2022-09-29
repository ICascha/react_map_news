import { Col, Layout, Menu, Row, DatePicker, Checkbox } from "antd";
import MapComponent from "../Map/MapComponent";
import CountrySelection from "../Controls/CountrySelection";
import GranularitySlider from "../Controls/GranularitySlider";
import TestBar from "../charts/TestBar";
import React from "react";
import { LatLngTuple } from "leaflet";

const { Header, Content } = Layout;
const { RangePicker } = DatePicker;

const DashBoard = () => {
  const startMapCenter: LatLngTuple = [5.152149, 46.199615];
  const startMapZoom: number = 5.2;

  const [mapCenter, setMapCenter] = React.useState(startMapCenter);
  const [mapZoom, setMapZoom] = React.useState(startMapZoom);
  const [N, setN] = React.useState(1);

  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const onChangeDate = (
    startDate: Date | undefined,
    endDate: Date | undefined
  ) => {
    if (!(startDate && endDate)) {
      setStartDate(null);
      setEndDate(null);
      return;
    }
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const [drawIPC, setDrawIPC] = React.useState(false);
  const [drawMap, setDrawMap] = React.useState(true);
  const [selectedRegion, setSelectedRegion] = React.useState("");
  return (
    <>
      {/* <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0, height: "10%" }}
      /> */}
      <Content style={{ margin: "16px", height: "100%" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, height: "100%", width: "100%" }}
        >
          <Row style={{ height: "100%" }}>
            <Col span={12}>
              <CountrySelection setMapCenter={setMapCenter} />
              <RangePicker
                onChange={(values, _) =>
                  values
                    ? onChangeDate(values[0]?.toDate(), values[1]?.toDate())
                    : setStartDate(null)
                }
              />
              <GranularitySlider setN={setN} />
              <div style={{ height: "70%" }}>
                {startDate && <TestBar N={N} />}
              <Checkbox onChange={(e) => setDrawMap(e.target.checked)} defaultChecked={true}>show Map</Checkbox>
              <Checkbox onChange={(e) => setDrawIPC(e.target.checked)}>show IPC</Checkbox>
              <h1>{selectedRegion}</h1>
              </div>
            </Col>
            <Col span={12}>
              <MapComponent center={mapCenter} zoom={mapZoom} drawIPC={drawIPC} drawMap={drawMap} setSelectedRegion={setSelectedRegion}/>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};

export default DashBoard;
