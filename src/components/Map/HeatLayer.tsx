import { useMap } from "react-leaflet";

function HeatLayer({ center, zoom }: ControlProps) {
  const map = useMap();
  map.add();
  return null;
}

export default HeatLayer;
