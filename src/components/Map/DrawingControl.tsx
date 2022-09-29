import * as React from "react";
import * as L from "leaflet";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import type { FeatureCollection } from "geojson";
import { point, polygon, booleanPointInPolygon, Position } from "@turf/turf";

export default function DrawingControl() {
  //const point = turf.point([-77, 44]);

  const ref = React.useRef<L.FeatureGroup>(null);
  // const handleChange = () => {
  //   const geo = ref.current?.toGeoJSON();
  //   if (geo?.type === "FeatureCollection") {
  //     turf.polygon(geo.features[0].geometry);
  //   }
  // };

  const onCreated = (v: L.DrawEvents.Created) => {
    const p = point([46.9, 5.3]);
    const feature = v.layer.feature;
    const coords = v.layer.toGeoJSON().geometry.coordinates as Position[][];
    console.log(booleanPointInPolygon(p, polygon(coords)));
  };

  return (
    <FeatureGroup ref={ref}>
      <EditControl
        position="topright"
        draw={{
          rectangle: false,
          circle: false,
          polyline: false,
          polygon: true,
          marker: false,
          circlemarker: false,
        }}
        onCreated={onCreated}
      />
    </FeatureGroup>
  );
}
