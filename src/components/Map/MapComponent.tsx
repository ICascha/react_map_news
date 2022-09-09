import { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ChangeView from "./ChangeView";

const somaliaPos: LatLngTuple = [5.152149, 46.199615];

const MapComponent = ({ center, zoom }: ControlProps) => (
  <MapContainer
    center={somaliaPos}
    zoom={5.2}
    style={{ width: "100%", height: "100% " }}
  >
    <ChangeView center={center} zoom={zoom} />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={somaliaPos}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);

export default MapComponent;
