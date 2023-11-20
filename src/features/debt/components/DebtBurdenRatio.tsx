import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { DebtBurdenRatioChart } from "./DebtBurdenRatioChart";
import { debtBurdenRatioData } from "../data/debt";

export default function DebtBurdenRatio() {
  return (
    <Item
      title="Debt Burden Ratio"
      content={
        <CardContent style={{ height: "400px", padding: 0 }} className="Mui-Chart">
          <DebtBurdenRatioChart data={debtBurdenRatioData} />
        </CardContent>
      }
      height={500}
    />
  );
}
