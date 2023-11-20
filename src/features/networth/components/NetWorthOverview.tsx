import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { NetWorthOverviewChart } from "./NetWorthOverviewChart";
import { netWorthHistoryData } from "../data/networth";


export default function NetWorthOverview() {
  return (
    <Item
      title="Net Worth History"
      content={
        <CardContent style={{ height: "400px", padding: 0 }} className="Mui-Chart">
          <NetWorthOverviewChart data={netWorthHistoryData} />
        </CardContent>
      }
      height={500}
    />
  );
}
