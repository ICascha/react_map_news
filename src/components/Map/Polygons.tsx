import { LatLngTuple } from "leaflet";
import { Polygon, GeoJSON, Popup, Marker } from "react-leaflet";
import regionsJson from "./regions.json";
import GeoJsonObject from "geojson";
import { Card, Popover } from "antd";
import React from "react";

console.log(regionsJson);
regionsJson.features.map((d) => console.log(d));
const colors = ["#CDFACD", "#FAE61E", "#E67800", "#C80000", "#640000"];
const randomColor = () => colors[Math.floor(Math.random() * 5)];
function Polygons() {
  
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupPos, setPopupPos] = React.useState<LatLngTuple>([0, 0]);
  const [regionFocus, setRegionFocus] = React.useState(-1);
  return (
    <>
      {regionsJson.features.map((entry, index) => (
        <GeoJSON
          data={entry as any}
          key={entry.id}
          pathOptions={{
            fillColor: randomColor(),
            color: " black",
            weight: 1,
            fillOpacity: (regionFocus === -1) ? 1 : 0.35 + 0.65 * Number(regionFocus === index),
          }}
          eventHandlers={{
            click: (e) => {
              (regionFocus === index) ? setRegionFocus(-1): setRegionFocus(index);
            },
          }}
        />
      ))}
      {showPopup && (
        <Popup position={popupPos} closeButton={false}>
          <div style={{ textAlign: "center" }}>IPC Phase 3</div>
        </Popup>
      )}
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          zIndex: 1000,
          fillOpacity: 0,
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "black",
            backgroundColor: "#CDFACD",
            margin: 0,
          }}
        >
          1
        </div>
        <div
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "black",
            backgroundColor: "#FAE61E",
            margin: 0,
          }}
        >
          2
        </div>
        <div
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "black",
            backgroundColor: "#E67800",
            margin: 0,
          }}
        >
          3
        </div>
        <div
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "black",
            backgroundColor: "#C80000",
            margin: 0,
          }}
        >
          <div style={{color: "white"}}>
          4
          </div>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "black",
            backgroundColor: "#640000",
            margin: 0,
          }}
        >
          <div style={{color: "white"}}>
          5
          </div>
        </div>
      </div>
    </>
  );
}

export default Polygons;
