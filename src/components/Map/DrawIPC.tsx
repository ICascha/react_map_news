import React from "react";
import IPCLegend from "./IPCLegend";
import Axios from "axios";
import DrawRegions from "./DrawRegions";

const colors = ["#CDFACD", "#FAE61E", "#E67800", "#C80000", "#640000"];
type Props = {
  setSelectedRegion: (regionName: string) => void;
  minDate: string;
  maxDate: string;
};

type meanIpcDataRow = {
  region: string;
  ipc: number;
};

type meanIpcData = meanIpcDataRow[];

function DrawIPC({ setSelectedRegion, minDate, maxDate }: Props) {
  const [ipcData, setIpcData] = React.useState<meanIpcData>([]);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/get_ipc_mean", {
      params: {
        minDate: minDate,
        maxDate: maxDate,
      },
    }).then((response) => {
      setIpcData(response.data);
    });
  }, []);

  return (
    <>
      <DrawRegions
        data={ipcData.map((row) => ({
          region: row.region,
          ipc: row.ipc,
          color: colors[row.ipc - 1],
        }))}
        setSelectedRegion={setSelectedRegion}
      />
      <IPCLegend />
    </>
  );
}

export default DrawIPC;
