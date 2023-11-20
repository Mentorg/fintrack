import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { AssetsVsLiabilitiesChart } from "./AssetsVsLiabilitiesChart";
import { assetsVsLiabilitiesData } from "../data/networth";

export default function AssetsVsLiabilities() {
  return (
    <Item
      title="Assets vs Liabilities"
      content={
        <CardContent style={{ height: "400px", padding: 0 }} className="Mui-Chart">
          <AssetsVsLiabilitiesChart data={assetsVsLiabilitiesData} />
        </CardContent>
      }
      height={500}
    />
  );
}
