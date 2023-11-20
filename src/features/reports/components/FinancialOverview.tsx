import { CardContent } from "@mui/material";
import Item from "../../../components/Item";
import { FinancialOverviewChart } from "./FinancialOverviewChart";
import { financialOverviewData } from "../data/reports";

export default function FinancialOverview() {
  return (
    <Item
      title="Financial Overview"
      content={
        <CardContent
          style={{ height: "400px", padding: 0 }}
          className="Mui-Chart"
        >
          <FinancialOverviewChart data={financialOverviewData} />
        </CardContent>
      }
      height={500}
    />
  );
}
