import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { DebtToIncomeRatioChart } from "./DebtToIncomeRatioChart";
import { debtToIncomeRatioData } from "../data/debt";

export default function DebtToIncomeRatio() {
  return (
    <Item
      title="Debt-to-Income Ratio"
      content={
        <CardContent
          style={{ height: "400px", padding: 0 }}
          className="Mui-Chart"
        >
          <DebtToIncomeRatioChart data={debtToIncomeRatioData} />
        </CardContent>
      }
      height={500}
    />
  );
}
