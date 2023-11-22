import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { SpendingBreakdownChart } from "./SpendingBreakdownChart";
import { spendingBreakdownData } from "../data/reports";

const SpendingBreakdown = () => {
  return (
    <Item
      title="Spending Breakdown"
      content={
        <CardContent
          style={{ height: "400px", padding: 0 }}
          className="Mui-Chart"
        >
          <SpendingBreakdownChart data={spendingBreakdownData} />
        </CardContent>
      }
      height={500}
    />
  );
};

export default SpendingBreakdown;
