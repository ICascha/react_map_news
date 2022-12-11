import { GeoJSON } from "react-leaflet";
import React from "react";
import regionsJson from "./regions.json";

let regionDict: { [region: string]: any } = regionsJson;

type dataRow = {
  region: string;
  color: string;
};

type Props = {
  data: dataRow[];
  setSelectedRegion: (regionName: string) => void;
};

function DrawRegions({ data, setSelectedRegion }: Props) {
  const [regionFocus, setRegionFocus] = React.useState(-1);

  return (
    <>
      {data.map((entry, index) => (
        <GeoJSON
          data={regionDict[entry.region] as any}
          key={index}
          pathOptions={{
            fillColor: entry.color,
            color: "black",
            weight: 1,
            fillOpacity:
              regionFocus === -1
                ? 1
                : 0.35 + 0.65 * Number(regionFocus === index),
          }}
          eventHandlers={{
            click: (e) => {
              regionFocus === index
                ? setRegionFocus(-1)
                : setRegionFocus(index);
              setSelectedRegion(entry.region);
            },
          }}
        />
      ))}
    </>
  );
}

export default DrawRegions;
